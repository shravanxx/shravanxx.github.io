// 1. NAVBAR SHADOW ON SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// 2. HAMBURGER MENU
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// 3. SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = Array.from(entry.target.parentElement.children).indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.07}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 4. ACTIVE NAV LINK
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

// 5. TYPEWRITER
const typeEl  = document.getElementById('typewriter');
const phrases = ['Im Shravan','DS Student','Learner','Problem Solver'];
let phraseIdx = 0, charIdx = 0, deleting = false, delay = 110;
function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typeEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) { deleting = true; delay = 1800; }
    else delay = 100 + Math.random() * 40;
  } else {
    typeEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; delay = 350; }
    else delay = 55;
  }
  setTimeout(typeLoop, delay);
}
setTimeout(typeLoop, 900);

// 6. SMOOTH SCROLL WITH NAVBAR OFFSET
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 8, behavior: 'smooth' });
  });
});
