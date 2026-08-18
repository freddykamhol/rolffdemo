import './style.css'

const icon = (name) => {
  const paths = {
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.98.72 2.91a2 2 0 0 1-.45 2.11L8.1 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.35 1.91.59 2.91.72A2 2 0 0 1 22 16.9z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    roof: '<path d="m3 12 9-8 9 8M5 10v10h14V10M9 20v-6h6v6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5-5L7.5 3.5l3 3 2.2-2.2a4 4 0 0 0 2 5L6 18l-2 2 2 2 2-2 8.7-8.7a4 4 0 0 0 5-5l-2.2 2.2-3-3z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/>'
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`
}

document.querySelector('#app').innerHTML = `
  <div class="topbar"><span>${icon('pin')} Neuer Weg 3 · 37688 Beverungen</span><span class="demo-label">Website-Konzept von <strong>KA Technologies</strong></span></div>
  <header class="nav">
    <a class="logo" href="#top" aria-label="Rolff Startseite"><img src="/assets/logo-optimized.png" width="700" height="233" decoding="async" fetchpriority="high" alt="Fritz & Tobias Rolff Bedachungen GmbH & Co. KG"></a>
    <nav id="navlinks" aria-label="Hauptnavigation"><div class="mobile-nav-head"><span>Navigation</span><small>Rolff Bedachungen</small></div><a href="#leistungen"><i>01</i>Leistungen</a><a href="#projekte"><i>02</i>Projekte</a><a href="#ueber-uns"><i>03</i>Über uns</a><a href="#kontakt"><i>04</i>Kontakt</a><div class="mobile-nav-contact"><span>Direkt erreichbar</span><a href="tel:+4952759877211">${icon('phone')} 05275 9877211</a><small>Website-Konzept von KA Technologies</small></div></nav>
    <a class="nav-call" href="tel:+4952759877211">${icon('phone')} <span>05275 9877211</span></a>
    <button class="menu" id="menu" aria-label="Menü öffnen" aria-expanded="false" aria-controls="navlinks"><span>Menü</span><b><i></i><i></i></b></button>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-bg"></div><div class="hero-shade"></div>
      <div class="hero-content reveal">
        <div class="eyebrow"><span></span> Ihr Dach. Unser Handwerk.</div>
        <h1>Oben drauf<br><em>Verlass.</em></h1>
        <p>Meisterhafte Dächer, starke Fassaden und intelligente Energielösungen – aus Beverungen, seit 1955.</p>
        <div class="hero-actions"><a class="btn primary" href="#kontakt">Projekt anfragen ${icon('arrow')}</a><a class="text-link" href="#leistungen">Leistungen entdecken ${icon('arrow')}</a></div>
        <div class="hero-trust"><span>${icon('shield')} Meisterbetrieb</span><span>${icon('clock')} Seit 1955</span><span>${icon('pin')} Regional vor Ort</span></div>
      </div>
      <div class="scroll">SCROLL <span></span></div>
    </section>

    <section class="intro section" id="leistungen">
      <div class="section-head reveal"><div><span class="kicker">Was wir für Sie tun</span><h2>Alles unter<br><em>einem Dach.</em></h2></div><p>Von der ersten Beratung bis zum letzten Ziegel: Wir denken Ihr Projekt ganzheitlich, arbeiten präzise und bleiben persönlich erreichbar.</p></div>
      <div class="services">
        <article class="service featured reveal"><span class="num">01</span><div class="service-icon">${icon('roof')}</div><h3>Dach & Abdichtung</h3><p>Steil- und Flachdächer, Sanierung, Dämmung und Dachfenster – fachgerecht geplant und dauerhaft ausgeführt.</p><ul><li>${icon('check')} Neueindeckung & Sanierung</li><li>${icon('check')} Flachdachabdichtung</li><li>${icon('check')} Dachfenster & Gauben</li></ul><a href="#kontakt">Projekt besprechen ${icon('arrow')}</a></article>
        <article class="service reveal"><span class="num">02</span><div class="service-icon">${icon('sun')}</div><h3>Photovoltaik</h3><p>Ihr Dach wird zum Kraftwerk. Beratung und fachgerechte Montage für nachhaltige Energie vom eigenen Haus.</p><ul><li>${icon('check')} Individuelle Beratung</li><li>${icon('check')} Fachgerechte Montage</li><li>${icon('check')} Dach & PV aus einer Hand</li></ul><a href="#kontakt">Projekt besprechen ${icon('arrow')}</a></article>
        <article class="service reveal"><span class="num">03</span><div class="service-icon">${icon('tool')}</div><h3>Fassade & Metall</h3><p>Hochwertige Fassadenbekleidungen und präzise Klempnerarbeiten in Zink, Kupfer und Aluminium.</p><ul><li>${icon('check')} Fassadenbekleidung</li><li>${icon('check')} Dachrinnen & Anschlüsse</li><li>${icon('check')} Metalldachdeckung</li></ul><a href="#kontakt">Projekt besprechen ${icon('arrow')}</a></article>
      </div>
    </section>

    <section class="numbers"><div><strong>70+</strong><span>Jahre Erfahrung</span></div><div><strong>3.</strong><span>Generation</span></div><div><strong>55.000</strong><span>m² größtes Projekt</span></div><div><strong>100%</strong><span>Meisterqualität</span></div></section>

    <section class="story section" id="ueber-uns">
      <div class="story-visual reveal"><div class="roof-pattern"></div><div class="year">1955<small>gegründet</small></div></div>
      <div class="story-copy reveal"><span class="kicker">Handwerk mit Haltung</span><h2>Tradition, die<br><em>weiterdenkt.</em></h2><p class="lead">Was Heinrich Rolff 1955 begann, führen wir heute in dritter Generation mit derselben Überzeugung weiter: Gute Arbeit hält.</p><p>Als Meisterbetrieb und Mitglied der Dachdeckerinnung Höxter-Warburg verbinden wir gewachsene Erfahrung mit zeitgemäßer Technik – für private, gewerbliche und öffentliche Bauvorhaben.</p><div class="signature"><span class="sig-mark">R.</span><span>Fritz & Tobias Rolff<small>Geschäftsführung</small></span></div></div>
    </section>

    <section class="projects section" id="projekte">
      <div class="section-head light reveal"><div><span class="kicker">Ausgewählte Referenzen</span><h2>Große Aufgaben.<br><em>Sauber gelöst.</em></h2></div><p>Erfahrung zeigt sich dort, wo Fläche, Technik und Verantwortung zusammenkommen.</p></div>
      <div class="project-grid">
        <article class="project p1 reveal"><div><span>Industrie · Beverungen</span><h3>HEGLA</h3><p>9.000 m² Dachfläche & 950 kWp Solaranlage</p></div></article>
        <article class="project p2 reveal"><div><span>Gewerbe · Warburg</span><h3>OBI Fachmarkt</h3><p>6.000 m² komplette Dachsanierung</p></div></article>
        <article class="project p3 reveal"><div><span>Denkmal · Grebenstein</span><h3>Kirche</h3><p>400 m² historische Sandsteineindeckung</p></div></article>
      </div>
    </section>

    <section class="contact section" id="kontakt">
      <div class="contact-copy reveal"><span class="kicker">Ihr Projekt startet hier</span><h2>Reden wir<br><em>übers Dach.</em></h2><p>Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns persönlich und unverbindlich bei Ihnen zurück.</p><div class="contact-direct"><a href="tel:+4952759877211">${icon('phone')}<span><small>Direkt anrufen</small>05275 9877211</span></a><a href="mailto:rolff-beverungen@t-online.de"><span class="at">@</span><span><small>E-Mail schreiben</small>rolff-beverungen@t-online.de</span></a></div></div>
      <form class="form reveal" id="demo-form"><div class="form-row"><label>Ihr Name<input required name="name" placeholder="Max Mustermann"></label><label>Telefon / E-Mail<input required name="contact" placeholder="Wie erreichen wir Sie?"></label></div><label>Worum geht es?<span class="select-wrap"><select name="service" aria-label="Gewünschte Leistung"><option value="" selected disabled>Leistung auswählen</option><option>Dachsanierung / Neueindeckung</option><option>Flachdach / Abdichtung</option><option>Photovoltaik</option><option>Fassade / Metall</option><option>Reparatur / Wartung</option><option>Etwas anderes</option></select><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></span></label><label>Erzählen Sie uns von Ihrem Projekt<textarea name="message" rows="4" placeholder="Gebäudetyp, Ort, gewünschter Zeitraum …"></textarea></label><label class="consent"><input type="checkbox" required><span>Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu.</span></label><button class="btn primary" type="submit">Anfrage unverbindlich senden ${icon('arrow')}</button><p class="form-note">Demo-Formular · Es werden keine Daten übertragen.</p><div class="success" role="status">Danke! In der echten Website würde Ihre Anfrage jetzt sicher versendet.</div></form>
    </section>
  </main>
  <footer><a class="logo footer-logo" href="#top"><img src="/assets/logo-optimized.png" width="700" height="233" loading="lazy" decoding="async" alt="Rolff Bedachungen"></a><p>Fritz u. Tobias Rolff Bedachungen GmbH & Co. KG<br>Neuer Weg 3 · 37688 Beverungen-Amelunxen</p><div><span>Unverbindliche Design-Demo</span><a class="ka-credit" href="https://katechnologies.de" target="_blank" rel="noopener">Konzept & Design · <strong>KA Technologies</strong> ${icon('arrow')}</a></div></footer>
  <a class="demo-badge" href="https://katechnologies.de" target="_blank" rel="noopener" aria-label="Diese Website-Demo wurde von KA Technologies erstellt"><span>DEMO BY</span><strong>KA</strong><small>TECHNOLOGIES</small></a>
`

const menu = document.querySelector('#menu')
const nav = document.querySelector('#navlinks')
const setMenu = open => {
  menu.classList.toggle('open', open)
  nav.classList.toggle('open', open)
  document.body.classList.toggle('menu-open', open)
  menu.setAttribute('aria-expanded', String(open))
  menu.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen')
  menu.querySelector('span').textContent = open ? 'Schließen' : 'Menü'
}
menu.addEventListener('click', () => setMenu(!nav.classList.contains('open')))
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)))
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false) })

const selectWrap = document.querySelector('.select-wrap')
const nativeSelect = selectWrap.querySelector('select')
const selectButton = document.createElement('button')
selectButton.type = 'button'
selectButton.className = 'custom-select-button'
selectButton.setAttribute('aria-haspopup', 'listbox')
selectButton.setAttribute('aria-expanded', 'false')
selectButton.innerHTML = `<span>Leistung auswählen</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>`
const optionsList = document.createElement('div')
optionsList.className = 'custom-options'
optionsList.setAttribute('role', 'listbox')
;[...nativeSelect.options].slice(1).forEach((option, index) => {
  const item = document.createElement('button')
  item.type = 'button'
  item.className = 'custom-option'
  item.setAttribute('role', 'option')
  item.dataset.value = option.value
  item.innerHTML = `<span class="option-number">0${index + 1}</span><span>${option.text}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`
  item.addEventListener('click', () => {
    nativeSelect.value = option.value
    selectButton.querySelector('span').textContent = option.text
    selectButton.classList.add('selected')
    optionsList.querySelectorAll('.custom-option').forEach(el => { el.classList.remove('selected'); el.setAttribute('aria-selected', 'false') })
    item.classList.add('selected'); item.setAttribute('aria-selected', 'true')
    selectWrap.classList.remove('dropdown-open'); selectButton.setAttribute('aria-expanded', 'false')
  })
  optionsList.appendChild(item)
})
selectWrap.append(selectButton, optionsList)
selectButton.addEventListener('click', () => {
  const open = selectWrap.classList.toggle('dropdown-open')
  selectButton.setAttribute('aria-expanded', String(open))
  if (open) optionsList.querySelector('.custom-option')?.focus()
})
document.addEventListener('click', e => { if (!selectWrap.contains(e.target)) { selectWrap.classList.remove('dropdown-open'); selectButton.setAttribute('aria-expanded', 'false') } })
optionsList.addEventListener('keydown', e => {
  const items = [...optionsList.querySelectorAll('.custom-option')]
  const current = items.indexOf(document.activeElement)
  if (e.key === 'ArrowDown') { e.preventDefault(); items[(current + 1) % items.length].focus() }
  if (e.key === 'ArrowUp') { e.preventDefault(); items[(current - 1 + items.length) % items.length].focus() }
  if (e.key === 'Escape') { selectWrap.classList.remove('dropdown-open'); selectButton.focus() }
})

document.querySelector('#demo-form').addEventListener('submit', e => {
  e.preventDefault()
  const success = e.currentTarget.querySelector('.success')
  success.classList.add('show')
  setTimeout(() => success.classList.remove('show'), 5000)
})

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
}), { threshold: .12 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
