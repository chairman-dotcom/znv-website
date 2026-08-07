// Sticky nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
}

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Waitlist form — front-end only stub (wire up to your ESP / backend later)
const form = document.querySelector('.waitlist-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const note = form.parentElement.querySelector('.form-note');
    if (input.value) {
      note.textContent = "You're on the list — we'll email you when your intake slot opens.";
      input.value = '';
    }
  });
}

// Apothecary — size selector (front-end only, swaps active state)
document.querySelectorAll('.shop-size-row').forEach((row) => {
  row.querySelectorAll('.shop-size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      row.querySelectorAll('.shop-size-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
});

// Apothecary — add to cart (front-end only stub, no real cart/checkout)
document.querySelectorAll('.add-to-cart').forEach((btn) => {
  const original = btn.innerHTML;
  btn.addEventListener('click', () => {
    btn.classList.add('is-added');
    btn.innerHTML = 'Added ✓';
    setTimeout(() => {
      btn.classList.remove('is-added');
      btn.innerHTML = original;
    }, 1800);
  });
});
