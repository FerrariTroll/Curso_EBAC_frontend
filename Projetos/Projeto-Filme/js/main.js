// 1. slides
//─────────────────────────────────────────────
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
let current  = 0;

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function next() {
  goTo((current + 1) % slides.length);
}

setInterval(next, 4000);

dots.forEach(dot => {
  dot.addEventListener('click', () => goTo(Number(dot.dataset.index)));
});
