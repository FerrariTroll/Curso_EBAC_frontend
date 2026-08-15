// 1. Slideshow
// ─────────────────────────────────────────────
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


// 2. FAQ accordion
// ─────────────────────────────────────────────
document.querySelectorAll('.faq__item').forEach(item => {
  item.querySelector('.faq__question').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});


// 3. Modal holográfico
// ─────────────────────────────────────────────
const modal            = document.getElementById('modal');
const modalCover       = document.getElementById('modal-cover');
const modalEp          = document.getElementById('modal-ep');
const modalTitle       = document.getElementById('modal-title');
const modalMeta        = document.getElementById('modal-meta');
const modalSin         = document.getElementById('modal-sinopse');
const modalElencoLabel = document.getElementById('modal-elenco-label');
const modalAtores      = document.getElementById('modal-atores');

function openModal(card) {
  modalCover.src             = card.dataset.img;
  modalCover.alt             = card.dataset.title;
  modalEp.textContent        = card.dataset.ep;
  modalTitle.textContent     = card.dataset.title;
  modalMeta.textContent      = card.dataset.meta;
  modalSin.textContent       = card.dataset.sinopse;
  modalElencoLabel.textContent = card.dataset.elencoLabel || 'Elenco';
  modalAtores.textContent    = card.dataset.elenco;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => openModal(card));
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
