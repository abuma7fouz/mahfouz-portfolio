const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const yearEl = document.getElementById('year');

if (menuToggle && navLinks){
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  })
}, {threshold:0.1});
revealEls.forEach(el=>io.observe(el));

// Year
if (yearEl) yearEl.textContent = new Date().getFullYear();
