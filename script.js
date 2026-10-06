// small reveal animation on load
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('main > *');
  els.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 80 * i);
  });
});
