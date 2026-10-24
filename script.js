'use strict';

// All text is visible by default; the subtle entrance never gates reading.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.enter').forEach(element => observer.observe(element));
}
document.querySelector('#year').textContent = String(new Date().getFullYear());
