// Simple mobile nav: clones desktop nav links into mobile overlay and toggles visibility
(function(){
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileInnerNav = mobileNav.querySelector('.mobile-nav-inner nav');
  const desktopNav = document.querySelector('header nav');

  if(!toggle || !mobileNav || !desktopNav) return;

  // Clone desktop links into mobile nav
  function populate(){
    mobileInnerNav.innerHTML = desktopNav.innerHTML;
  }

  function openNav(){
    mobileNav.classList.add('open');
    document.body.classList.add('no-scroll');
    toggle.setAttribute('aria-expanded','true');
    mobileNav.setAttribute('aria-hidden','false');
    toggle.classList.add('open');
  }

  function closeNav(){
    mobileNav.classList.remove('open');
    document.body.classList.remove('no-scroll');
    toggle.setAttribute('aria-expanded','false');
    mobileNav.setAttribute('aria-hidden','true');
    toggle.classList.remove('open');
  }

  toggle.addEventListener('click', ()=>{
    if(mobileNav.classList.contains('open')) closeNav(); else openNav();
  });

  // close when clicking on a link
  mobileInnerNav.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A') closeNav();
  });

  // close on escape
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeNav(); });

  populate();
})();
