(function(){
  // Detect active section from current URL
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const activeMap = {
    'solutions.html':'solutions.html',
    'solution-ai-design.html':'solutions.html',
    'projects.html':'projects.html',
    'project-mekong-delta.html':'projects.html',
    'about.html':'about.html',
    'insights.html':'insights.html',
    'insight-bio-campus.html':'insights.html',
    'careers.html':'careers.html',
    'research.html':'research.html',
    'contact.html':'contact.html'
  };
  const active = activeMap[path] || '';
  const cls = (page) => page === active ? ' class="active"' : '';

  const styles = `
.site-nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:22px 0;transition:.3s;color:#fff;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.site-nav.scrolled{background:rgba(11,27,63,.88);backdrop-filter:blur(14px);padding:14px 0;border-bottom:1px solid rgba(255,255,255,.08)}
.site-nav.hidden{transform:translateY(-100%)}
.site-nav *{box-sizing:border-box}
.site-nav .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:32px;width:100%;padding:0 56px}
.site-nav .logo{display:flex;align-items:baseline;gap:6px;text-decoration:none}
.site-nav .logo img{filter:none;display:block}
.site-nav .nav-links{display:flex;align-items:center;gap:38px}
.site-nav .nav-links a{font-size:15px;color:rgba(255,255,255,.85);font-weight:500;transition:color .15s;text-decoration:none;letter-spacing:0;text-transform:none;margin:0}
.site-nav .nav-links a:hover{color:#fff}
.site-nav .nav-links a.active{color:#9bb5ff}
.site-nav .nav-end{display:flex;align-items:center;gap:14px}
.site-nav .nav-tool{width:38px;height:38px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:transparent;border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.85);cursor:pointer;transition:.2s;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;font-weight:600;padding:0}
.site-nav .nav-tool:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.4);color:#fff}
.site-nav .nav-tool.lang{width:auto;padding:0 12px;gap:6px;letter-spacing:.1em;font-size:11px}
.site-nav .nav-tool svg{width:16px;height:16px;display:block}
.site-nav .nav-tool .caret{width:8px;height:8px;transition:transform .2s}
.site-nav .nav-tool .ic-sun{display:block}
.site-nav .nav-tool .ic-moon{display:none}
.site-nav .nav-tool[aria-pressed="true"] .ic-sun{display:none}
.site-nav .nav-tool[aria-pressed="true"] .ic-moon{display:block}
.site-nav .lang-wrap{position:relative}
.site-nav .lang-wrap.open .nav-tool.lang{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.4);color:#fff}
.site-nav .lang-wrap.open .nav-tool.lang .caret{transform:rotate(180deg)}
.site-nav .lang-menu{position:absolute;top:calc(100% + 10px);right:0;min-width:180px;background:rgba(11,27,63,.96);border:1px solid rgba(155,181,255,.18);border-radius:10px;backdrop-filter:blur(14px);box-shadow:0 14px 40px -12px rgba(0,0,0,.4);padding:6px;opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .18s,transform .18s;z-index:10}
.site-nav .lang-wrap.open .lang-menu{opacity:1;transform:translateY(0);pointer-events:auto}
.site-nav .lang-menu a{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:10px 14px;border-radius:6px;font-family:'Inter',sans-serif;font-size:14px;color:rgba(255,255,255,.85);font-weight:500;text-decoration:none;letter-spacing:0;text-transform:none;transition:background .15s,color .15s;margin:0}
.site-nav .lang-menu a:hover{background:rgba(155,181,255,.1);color:#fff}
.site-nav .lang-menu a .lcode{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;color:#9bb5ff;font-weight:600}
.site-nav .lang-menu a.active{color:#fff;background:rgba(155,181,255,.06)}
.site-nav .lang-menu a.active .lcode{color:#9bb5ff}
.site-nav .nav-cta{display:inline-flex;align-items:center;gap:10px;padding:12px 22px;border-radius:999px;background:#9bb5ff;color:#0b1b3f;border:1px solid #9bb5ff;font-size:14.5px;font-weight:600;text-decoration:none;transition:background .2s,color .2s,border-color .2s,transform .2s;cursor:pointer;letter-spacing:0;text-transform:none}
.site-nav .nav-cta:hover{background:#fff;color:#0b1b3f;border-color:#fff;transform:translateY(-1px)}
.site-nav .nav-cta svg{stroke:#0b1b3f}
.site-nav .nav-burger{display:none;width:42px;height:42px;border:none;background:transparent;cursor:pointer;padding:0;position:relative;z-index:301;color:#fff}
.site-nav .nav-burger span{display:block;position:absolute;left:9px;right:9px;height:1.6px;background:currentColor;border-radius:2px;transition:transform .35s cubic-bezier(.6,0,.2,1),opacity .25s,top .35s cubic-bezier(.6,0,.2,1)}
.site-nav .nav-burger span:nth-child(1){top:14px}
.site-nav .nav-burger span:nth-child(2){top:20px}
.site-nav .nav-burger span:nth-child(3){top:26px}
.site-nav .nav-burger.open span:nth-child(1){top:20px;transform:rotate(45deg)}
.site-nav .nav-burger.open span:nth-child(2){opacity:0;transform:scaleX(.4)}
.site-nav .nav-burger.open span:nth-child(3){top:20px;transform:rotate(-45deg)}

.nav-overlay{position:fixed;inset:0;z-index:250;background:#0b1b3f;clip-path:circle(0% at calc(100% - 42px) 42px);transition:clip-path .55s cubic-bezier(.7,0,.2,1);overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:'Inter',system-ui,sans-serif;color:#fff;pointer-events:none}
.nav-overlay::before{content:"";position:absolute;inset:0;background:radial-gradient(900px 600px at 80% 25%,rgba(99,140,255,.18),rgba(99,140,255,0) 60%);pointer-events:none}
.nav-overlay.open{clip-path:circle(150% at calc(100% - 42px) 42px);pointer-events:auto}
.nav-overlay .ov-logo{position:absolute;top:28px;left:50%;transform:translate(-50%,-12px);z-index:2;display:block;opacity:0;transition:opacity .4s ease,transform .4s ease}
.nav-overlay .ov-logo img{height:36px;width:auto;display:block}
.nav-overlay.open .ov-logo{opacity:1;transform:translate(-50%,0);transition-delay:.18s}
.nav-overlay .ov-inner{position:relative;min-height:100%;display:flex;flex-direction:column;padding:120px 28px 36px;max-width:640px;box-sizing:border-box}
.nav-overlay .ov-eyebrow{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.22em;color:#9bb5ff;text-transform:uppercase;font-weight:600;margin-bottom:36px;display:flex;align-items:center;gap:14px;opacity:0;transform:translateY(14px);transition:opacity .45s ease,transform .45s ease;transition-delay:0s}
.nav-overlay .ov-eyebrow::before{content:"";width:30px;height:1px;background:#9bb5ff}
.nav-overlay.open .ov-eyebrow{opacity:1;transform:translateY(0);transition-delay:.25s}
.nav-overlay .ov-list{display:flex;flex-direction:column;list-style:none;margin:0;padding:0}
.nav-overlay .ov-list a{display:flex;align-items:baseline;justify-content:space-between;font-family:'Instrument Serif',serif;font-size:clamp(38px,9vw,56px);color:#fff;text-decoration:none;line-height:1.05;font-weight:400;padding:14px 0;border-bottom:1px solid rgba(155,181,255,.12);letter-spacing:-.02em;opacity:0;transform:translateY(28px);transition:opacity .55s cubic-bezier(.2,.7,.2,1),transform .55s cubic-bezier(.2,.7,.2,1),color .15s,padding .25s;transition-delay:0s}
.nav-overlay .ov-list a:hover,.nav-overlay .ov-list a:focus{color:#9bb5ff;padding-left:8px;outline:none}
.nav-overlay .ov-list a .num{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;color:rgba(155,181,255,.55);font-weight:600;align-self:center}
.nav-overlay .ov-list a em{font-style:italic;color:#9bb5ff}
.nav-overlay.open .ov-list a{opacity:1;transform:translateY(0);transition-delay:calc(.32s + var(--i, 0) * .055s)}
.nav-overlay .ov-foot{margin-top:auto;padding-top:48px;border-top:1px solid rgba(155,181,255,.1);display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;opacity:0;transform:translateY(14px);transition:opacity .5s ease,transform .5s ease;transition-delay:0s}
.nav-overlay.open .ov-foot{opacity:1;transform:translateY(0);transition-delay:.7s}
.nav-overlay .ov-foot .ov-cta{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:999px;background:#9bb5ff;color:#0b1b3f;font-size:15px;font-weight:600;text-decoration:none;transition:.2s}
.nav-overlay .ov-foot .ov-cta:hover{background:#fff}
.nav-overlay .ov-foot .ov-cta svg{stroke:#0b1b3f}
.nav-overlay .ov-foot .ov-tools{display:flex;gap:10px;align-items:center}
.nav-overlay .ov-foot .ov-tools .ov-lang{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,.85);text-transform:uppercase;font-weight:600;padding:10px 14px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:transparent;cursor:pointer;display:inline-flex;align-items:center;gap:8px}
.nav-overlay .ov-foot .ov-tools .ov-lang:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4)}
body.menu-open{overflow:hidden}

@media (max-width:1080px){
  .site-nav .nav-inner{padding:0 24px}
  .site-nav .nav-links{display:none}
  .site-nav .nav-end{display:none}
  .site-nav .nav-burger{display:inline-flex;align-items:center;justify-content:center}
}
@media (max-width:560px){
  .site-nav .nav-inner{padding:0 18px}
  .site-nav{padding:16px 0}
  .site-nav.scrolled{padding:12px 0}
  .nav-overlay .ov-inner{padding:96px 22px 28px}
  .nav-overlay .ov-foot{flex-direction:column;align-items:flex-start;gap:22px}
  .nav-overlay .ov-foot .ov-cta{width:100%;justify-content:center}
}
`;

  const html = `<nav class="site-nav nav" id="nav">
  <div class="nav-inner">
    <a class="logo" href="index.html"><img src="assets/logo-white.png" alt="xR&D Technologies" style="height:40px;width:auto"></a>
    <div class="nav-links">
      <a href="solutions.html"${cls('solutions.html')}>Solutions</a>
      <a href="projects.html"${cls('projects.html')}>Projects</a>
      <a href="about.html"${cls('about.html')}>About</a>
      <a href="insights.html"${cls('insights.html')}>Insights</a>
      <a href="careers.html"${cls('careers.html')}>Careers</a>
      <a href="research.html"${cls('research.html')}>Research</a>
    </div>
    <div class="nav-end">
      <div class="lang-wrap">
        <button class="nav-tool lang" type="button" aria-label="Language" aria-haspopup="true" aria-expanded="false">
          <span class="lang-current">EN</span>
          <svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="lang-menu" role="menu">
          <a href="#" data-lang="EN" class="active" role="menuitem">English<span class="lcode">EN</span></a>
          <a href="#" data-lang="JP" role="menuitem">日本語<span class="lcode">JP</span></a>
          <a href="#" data-lang="VN" role="menuitem">Tiếng Việt<span class="lcode">VN</span></a>
        </div>
      </div>
      <button class="nav-tool theme" type="button" aria-label="Toggle dark mode" aria-pressed="false">
        <svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <a class="nav-cta" href="contact.html">Contact Us
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </a>
    </div>
    <button class="nav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navOverlay">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-overlay" id="navOverlay" role="dialog" aria-label="Site menu" aria-hidden="true">
  <a class="ov-logo" href="index.html"><img src="assets/logo-white.png" alt="xR&D Technologies"></a>
  <div class="ov-inner">
    <div class="ov-eyebrow">Menu</div>
    <nav class="ov-list" aria-label="Mobile navigation">
      <a href="solutions.html" style="--i:0"${cls('solutions.html')}>Solutions<span class="num">01</span></a>
      <a href="projects.html" style="--i:1"${cls('projects.html')}>Projects<span class="num">02</span></a>
      <a href="about.html" style="--i:2"${cls('about.html')}>About<span class="num">03</span></a>
      <a href="insights.html" style="--i:3"${cls('insights.html')}>Insights<span class="num">04</span></a>
      <a href="careers.html" style="--i:4"${cls('careers.html')}>Careers<span class="num">05</span></a>
      <a href="research.html" style="--i:5"${cls('research.html')}>Research<span class="num">06</span></a>
    </nav>
    <div class="ov-foot">
      <a class="ov-cta" href="contact.html">Contact Us
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </a>
      <div class="ov-tools">
        <button class="ov-lang" type="button">EN <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      </div>
    </div>
  </div>
</div>`;

  function inject(){
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
    document.body.insertAdjacentHTML('afterbegin', html);

    // Smart header: condense on scroll, hide on scroll down, reveal on scroll up
    const nav = document.getElementById('nav');
    if (nav){
      const condenseAt = 80;
      const hideAt = 160;
      const dirThreshold = 6;
      let lastY = window.scrollY;
      let ticking = false;

      const update = () => {
        const y = window.scrollY;
        const diff = y - lastY;
        const menuOpen = document.body.classList.contains('menu-open');

        nav.classList.toggle('scrolled', y > condenseAt);

        if (menuOpen || y <= hideAt) {
          nav.classList.remove('hidden');
        } else if (diff > dirThreshold) {
          nav.classList.add('hidden');
        } else if (diff < -dirThreshold) {
          nav.classList.remove('hidden');
        }

        lastY = y;
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };
      window.addEventListener('scroll', onScroll, {passive:true});
      update();
    }

    // Theme toggle (visual only — icon swap)
    const themeBtn = document.querySelector('.site-nav .nav-tool.theme');
    if (themeBtn){
      themeBtn.addEventListener('click', () => {
        const pressed = themeBtn.getAttribute('aria-pressed') === 'true';
        themeBtn.setAttribute('aria-pressed', String(!pressed));
      });
    }

    // Language dropdown (visual only)
    const langWrap = document.querySelector('.site-nav .lang-wrap');
    if (langWrap){
      const langBtn = langWrap.querySelector('.nav-tool.lang');
      const langCurrent = langWrap.querySelector('.lang-current');
      const langItems = langWrap.querySelectorAll('.lang-menu a');
      langBtn.addEventListener('click', e=>{
        e.stopPropagation();
        const open = langWrap.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', String(open));
      });
      langItems.forEach(item=>{
        item.addEventListener('click', e=>{
          e.preventDefault();
          langItems.forEach(x=>x.classList.remove('active'));
          item.classList.add('active');
          if (langCurrent) langCurrent.textContent = item.dataset.lang;
          langWrap.classList.remove('open');
          langBtn.setAttribute('aria-expanded','false');
        });
      });
      document.addEventListener('click', e=>{
        if (!langWrap.contains(e.target)){
          langWrap.classList.remove('open');
          langBtn.setAttribute('aria-expanded','false');
        }
      });
    }

    // Hamburger menu (mobile)
    const burger = document.querySelector('.nav-burger');
    const overlay = document.getElementById('navOverlay');
    if (burger && overlay){
      const openMenu = () => {
        burger.classList.add('open');
        overlay.classList.add('open');
        burger.setAttribute('aria-expanded','true');
        burger.setAttribute('aria-label','Close menu');
        overlay.setAttribute('aria-hidden','false');
        document.body.classList.add('menu-open');
      };
      const closeMenu = () => {
        burger.classList.remove('open');
        overlay.classList.remove('open');
        burger.setAttribute('aria-expanded','false');
        burger.setAttribute('aria-label','Open menu');
        overlay.setAttribute('aria-hidden','true');
        document.body.classList.remove('menu-open');
      };
      burger.addEventListener('click', () => {
        if (burger.classList.contains('open')) closeMenu();
        else openMenu();
      });
      overlay.querySelectorAll('.ov-list a').forEach(a => {
        a.addEventListener('click', () => setTimeout(closeMenu, 120));
      });
      const ovCta = overlay.querySelector('.ov-cta');
      if (ovCta) ovCta.addEventListener('click', () => setTimeout(closeMenu, 120));
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
      });
    }
  }

  if (document.body) inject();
  else document.addEventListener('DOMContentLoaded', inject);
})();
