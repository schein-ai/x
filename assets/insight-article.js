(function(){
  const nav = document.getElementById('nav');
  const bar = document.getElementById('scrollBar');
  const heroImg = document.getElementById('heroImg');

  const tocLinks = document.querySelectorAll('.toc-list a');
  const sectionIds = Array.from(tocLinks).map(a => a.getAttribute('href').slice(1));
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function onScroll(){
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 80);
    if (bar){
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${Math.min(1, y/docH)})`;
    }
    if (heroImg && y < window.innerHeight){
      heroImg.style.transform = `scale(1.15) translateY(${y*0.35}px)`;
    }
    let active = sections[0];
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < window.innerHeight*0.4) active = s;
    });
    if (active){
      tocLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+active.id));
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  if (typeof gsap !== 'undefined'){
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.nav-inner > *',{y:-20,opacity:0},{y:0,opacity:1,duration:.7,ease:'power3.out',stagger:.07,delay:.05});
    gsap.from('.crumb',{y:14,opacity:0,duration:.6,ease:'power3.out',delay:.2});
    gsap.from('.hero-kicker',{y:18,opacity:0,duration:.7,ease:'power3.out',delay:.35});
    gsap.from('.hero-h',{y:40,opacity:0,duration:1.1,ease:'power4.out',delay:.45});
    gsap.from('.hero-lede',{y:24,opacity:0,duration:.9,ease:'power3.out',delay:.65});
    gsap.from('.hero-byline',{y:18,opacity:0,duration:.8,ease:'power3.out',delay:.85});

    gsap.utils.toArray('.article-body > *').forEach(el=>{
      gsap.fromTo(el,{y:24,opacity:0},{y:0,opacity:1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}});
    });

    gsap.utils.toArray('.sidebar .scard').forEach((c,i)=>{
      gsap.fromTo(c,{y:20,opacity:0},{y:0,opacity:1,duration:.7,ease:'power3.out',delay:i*0.05,scrollTrigger:{trigger:c,start:'top 92%'}});
    });

    gsap.utils.toArray('.art-fig').forEach(fig=>{
      const img = fig.querySelector('.ifimg, img');
      if (img){
        gsap.fromTo(img,{scale:1.1},{scale:1,duration:1.4,ease:'expo.out',scrollTrigger:{trigger:fig,start:'top 90%'}});
      }
    });

    gsap.fromTo('.art-film .fimg',{scale:1.15},{scale:1,duration:1.6,ease:'expo.out',scrollTrigger:{trigger:'.art-film',start:'top 90%'}});
    gsap.from('.art-film .fplay',{scale:.6,opacity:0,duration:.9,ease:'back.out(1.6)',scrollTrigger:{trigger:'.art-film',start:'top 80%'}});

    gsap.from('.more-head h3',{y:30,opacity:0,duration:.9,ease:'power4.out',scrollTrigger:{trigger:'.more',start:'top 85%'}});
    gsap.from('.more-head a.go',{x:14,opacity:0,duration:.6,ease:'power3.out',scrollTrigger:{trigger:'.more',start:'top 85%'}});
    gsap.fromTo('.mcard',{y:40,opacity:0},{y:0,opacity:1,duration:.9,ease:'power4.out',stagger:.12,scrollTrigger:{trigger:'.mgrid',start:'top 85%'}});

    window.addEventListener('load',()=>ScrollTrigger.refresh());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(()=>ScrollTrigger.refresh());
  }

  document.querySelectorAll('.art-film .fplay').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      const sec = btn.closest('.art-film');
      if (!sec) return;
      sec.classList.add('playing');
      const video = sec.querySelector('.fvid');
      if (video) video.play().catch(()=>{});
    });
  });
})();
