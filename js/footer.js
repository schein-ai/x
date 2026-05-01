(function(){
  const styles = `
.site-footer{position:relative;background:#06122e;color:#cdd5e8;padding:80px 0 40px;font-family:'Inter',system-ui,sans-serif;text-align:left;font-size:14px;border-top:0;-webkit-font-smoothing:antialiased;overflow:hidden}
.site-footer::before{content:"";position:absolute;left:0;right:0;top:-15%;bottom:-15%;background:url('assets/footer-bg.png') center/cover no-repeat;filter:invert(1);mix-blend-mode:screen;opacity:.1;pointer-events:none;z-index:0;transform:translateY(var(--fbg-y, 0));will-change:transform}
.site-footer *{box-sizing:border-box}
.site-footer .wrap{width:100%;padding:0 56px;margin:0;position:relative;z-index:1}
.site-footer a{text-decoration:none}
.site-footer .footer-grid{display:grid;grid-template-columns:1.2fr 2fr;gap:80px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.08)}
.site-footer .footer-brand .logo{display:flex;align-items:baseline;gap:6px;margin:0}
.site-footer .footer-blurb{font-size:14px;line-height:1.6;color:#9aa9c8;margin:0 0 22px;max-width:380px}
.site-footer .footer-social{display:flex;gap:12px}
.site-footer .footer-social a{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.12);display:grid;place-items:center;color:#9aa9c8;transition:.2s;margin:0}
.site-footer .footer-social a:hover{color:#fff;border-color:rgba(255,255,255,.3)}
.site-footer .footer-cols{display:grid;grid-template-columns:repeat(4,1fr);gap:32px}
.site-footer .footer-cols > div{display:flex;flex-direction:column;gap:10px}
.site-footer .footer-h{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#fff;font-weight:600;margin:0 0 8px}
.site-footer .footer-cols a{font-size:14px;color:#9aa9c8;transition:color .15s;margin:0;letter-spacing:0;text-transform:none;display:inline}
.site-footer .footer-cols a:hover{color:#fff}
.site-footer .newsletter{display:flex;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;overflow:hidden}
.site-footer .newsletter input{flex:1;background:transparent;border:none;outline:none;color:#fff;padding:12px 14px;font-size:13.5px;font-family:inherit}
.site-footer .newsletter input::placeholder{color:#7c89a8}
.site-footer .newsletter button{background:#fff;color:#0b1b3f;border:none;width:46px;font-size:18px;cursor:pointer;font-weight:500}
.site-footer .newsletter button:hover{background:#eef3fb}
.site-footer .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:32px;font-size:12.5px;color:#7c89a8}
.site-footer .footer-links{display:flex;gap:22px}
.site-footer .footer-links a{color:#7c89a8;margin:0}
.site-footer .footer-links a:hover{color:#cdd5e8}
@media (max-width:1080px){
  .site-footer .footer-grid{grid-template-columns:1fr;gap:50px}
  .site-footer .footer-cols{grid-template-columns:1fr 1fr}
  .site-footer .wrap{padding:0 24px}
  .site-footer .footer-bottom{flex-direction:column;gap:14px;text-align:center}
}
@media (max-width:560px){
  .site-footer{padding:60px 0 30px}
  .site-footer::before{background-size:auto 100%;background-position:right center;opacity:.15}
  .site-footer .wrap{padding:0 18px}
  .site-footer .footer-cols{grid-template-columns:1fr;gap:28px}
  .site-footer .footer-grid{padding-bottom:40px;gap:40px}
}
`;

  const html = `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <div class="logo" style="margin-bottom:18px">
        <img src="assets/logo-white.png" alt="xR&D Technologies" style="height:48px;width:auto">
      </div>
      <p class="footer-blurb">An architectural AI studio designing the next generation of intelligent, sustainable buildings — from Đà Nẵng to the world.</p>
      <div class="footer-social">
        <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4M12 13v4"/></svg></a>
        <a href="#" aria-label="Are.na"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg></a>
      </div>
    </div>
    <div class="footer-cols">
      <div>
        <div class="footer-h">Studio</div>
        <a href="about.html">About</a><a href="careers.html">Careers</a><a href="insights.html">Press</a><a href="contact.html">Contact</a>
      </div>
      <div>
        <div class="footer-h">Work</div>
        <a href="projects.html">Projects</a><a href="solutions.html">Solutions</a><a href="#">Platform</a><a href="#">Capabilities</a>
      </div>
      <div>
        <div class="footer-h">Resources</div>
        <a href="insights.html">Insights</a><a href="#">Research</a><a href="#">Newsletter</a><a href="contact.html">Contact</a>
      </div>
      <div>
        <div class="footer-h">Newsletter</div>
        <p class="footer-blurb" style="font-size:13px;margin:0 0 14px">Quarterly notes on AI, climate, and the built environment.</p>
        <form class="newsletter" onsubmit="event.preventDefault()">
          <input type="email" placeholder="you@studio.com" />
          <button type="submit" aria-label="Subscribe">→</button>
        </form>
      </div>
    </div>
  </div>
  <div class="wrap footer-bottom">
    <span>© 2026 xR&amp;D Technologies — Đà Nẵng, Vietnam</span>
    <span class="footer-links"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="cookies.html">Cookies</a></span>
  </div>
</footer>`;

  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
  document.body.insertAdjacentHTML('beforeend', html);

  // Footer-bg parallax
  const footer = document.querySelector('.site-footer');
  if (footer){
    let raf = 0;
    function updateParallax(){
      raf = 0;
      const rect = footer.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // amount of scroll since footer entered viewport (0 when just entering, increases as scrolled past)
      const enter = vh - rect.top;
      if (enter < 0 || rect.bottom < 0) return;
      const offset = Math.min(enter, vh + rect.height) * 0.18;
      footer.style.setProperty('--fbg-y', offset + 'px');
    }
    function onScroll(){ if (!raf) raf = requestAnimationFrame(updateParallax); }
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll, {passive:true});
    updateParallax();
  }
})();
