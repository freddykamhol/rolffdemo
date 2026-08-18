import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { createHmac, timingSafeEqual } from 'node:crypto'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))
const port = Number(process.env.PORT) || 3000
const demoPassword = process.env.DEMO_PASSWORD || 'Rolff2026'
const authToken = createHmac('sha256', demoPassword).update('rolff-demo-access').digest('hex')

const loginPage = error => `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Geschützte Demo | KA Technologies</title>
<style>*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:linear-gradient(145deg,#041a32,#0755a3);color:#101b2d;font-family:Arial,sans-serif}.card{width:min(100%,420px);padding:40px;background:#fff;border-radius:16px;box-shadow:0 28px 80px #02101f66}.eyebrow{color:#0755a3;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}h1{margin:16px 0 10px;font-size:32px;letter-spacing:-.04em}p{margin:0 0 28px;color:#617080;font-size:14px;line-height:1.6}label{display:block;margin-bottom:9px;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}input{width:100%;height:54px;padding:0 15px;border:1px solid #ccd8e4;border-radius:8px;font-size:16px;outline:0}input:focus{border-color:#0755a3;box-shadow:0 0 0 4px #0755a31a}button{width:100%;height:54px;margin-top:14px;border:0;border-radius:8px;background:#0755a3;color:#fff;font-weight:700;cursor:pointer}button:hover{background:#043f7c}.error{margin:12px 0 0;padding:10px;border-radius:6px;background:#fff0f1;color:#b20b1b;font-size:12px}.credit{display:block;margin-top:25px;color:#8b98a5;font-size:9px;letter-spacing:.1em;text-align:center;text-transform:uppercase}</style></head>
<body><main class="card"><span class="eyebrow">Private Kundendemo</span><h1>Rolff Bedachungen</h1><p>Diese Website ist ein geschütztes Konzept von KA Technologies.</p><form method="post" action="/login"><label for="password">Passwort</label><input id="password" name="password" type="password" autocomplete="current-password" autofocus required><button type="submit">Demo öffnen</button>${error ? '<div class="error" role="alert">Das Passwort ist nicht korrekt.</div>' : ''}</form><span class="credit">KA Technologies · Web Experience</span></main></body></html>`

const hasValidCookie = request => {
  const cookie = request.headers.cookie?.split(';').map(value => value.trim()).find(value => value.startsWith('rolff_demo_auth='))
  const supplied = cookie?.slice('rolff_demo_auth='.length) || ''
  const expectedBuffer = Buffer.from(authToken)
  const suppliedBuffer = Buffer.from(supplied)
  return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer)
}

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)

  if (pathname === '/health') {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' })
    response.end('ok')
    return
  }

  if (pathname === '/login' && request.method === 'POST') {
    let body = ''
    request.on('data', chunk => { if (body.length < 4096) body += chunk })
    request.on('end', () => {
      const password = new URLSearchParams(body).get('password') || ''
      const valid = Buffer.byteLength(password) === Buffer.byteLength(demoPassword) && timingSafeEqual(Buffer.from(password), Buffer.from(demoPassword))
      if (valid) {
        const secure = request.headers['x-forwarded-proto'] === 'https' ? '; Secure' : ''
        response.writeHead(303, { Location: '/', 'Set-Cookie': [`rolff_demo_auth=${authToken}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400${secure}`, `rolff_demo_client=1; SameSite=Strict; Path=/; Max-Age=86400${secure}`], 'Cache-Control': 'no-store' })
        response.end()
      } else {
        response.writeHead(401, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' })
        response.end(loginPage(true))
      }
    })
    return
  }

  if (!hasValidCookie(request)) {
    response.writeHead(401, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' })
    response.end(loginPage(false))
    return
  }

  const relativePath = normalize(pathname).replace(/^([/\\])+/, '')
  let filePath = join(root, relativePath || 'index.html')

  if (!filePath.startsWith(root) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(root, 'index.html')
  }

  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': extname(filePath) === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
  })
  createReadStream(filePath).pipe(response)
}).listen(port, '0.0.0.0', () => {
  console.log(`Rolff demo running on port ${port}`)
})
