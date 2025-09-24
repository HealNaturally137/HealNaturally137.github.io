
// Simple progressive enhancement for the nav active state and mobile menu
(function(){
  const links = document.querySelectorAll('nav a');
  const path = location.pathname.replace(/\/index\.html$/, '/');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === '.' || href === './'){ return; }
    const normalized = new URL(href, location.origin).pathname;
    if (normalized === location.pathname) {
      a.setAttribute('aria-current','page');
    }
  });
})();
