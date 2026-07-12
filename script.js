document.addEventListener('DOMContentLoaded', function () {

  AOS.init({ duration: 900, once: true });

  const toggleBtn = document.querySelector('.toggle');
  if (!toggleBtn) return;

  // Default state: LIGHT mode
  document.body.classList.remove('dark');
  toggleBtn.textContent = '🌙';

  // Toggle (mobile + desktop safe)
  toggleBtn.addEventListener('click', toggleTheme);
  toggleBtn.addEventListener('touchstart', toggleTheme);

  function toggleTheme(e) {
    e.preventDefault();

    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  }

});


/* ===== One-Time Badge Typing (On Page Load) ===== */

document.addEventListener('DOMContentLoaded', () => {

  const badge = document.querySelector('.typing-badge');
  if (!badge) return;

  const text = "IT Support Specialist | Electrical Technologist";
  let index = 0;

  function typeOnce() {
    if (index <= text.length) {
      badge.textContent = text.substring(0, index);
      index++;
      setTimeout(typeOnce, 70);
    }
  }

  typeOnce();

});


/* ===== Certificate Lightbox ===== */

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img src="" alt="Certificate">';
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');

// Open lightbox
document.querySelectorAll('.cert-thumb').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.dataset.full || img.src;
    lightbox.classList.add('active');
  });
});

// Close on click outside
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
});

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }
});



/* ===============================
   Certificate Protection Script
   =============================== */

// Disable right-click on whole page
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable drag & drop (image dragging)
document.addEventListener('dragstart', function (e) {
  e.preventDefault();
});

// Disable common save / inspect shortcuts
document.addEventListener('keydown', function (e) {

  // Ctrl + S (Save)
  if (e.ctrlKey && e.key.toLowerCase() === 's') {
    e.preventDefault();
  }

  // Ctrl + U (View Source)
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
  }

  // Ctrl + Shift + I / J / C (DevTools)
  if (
    e.ctrlKey &&
    e.shiftKey &&
    ['i', 'j', 'c'].includes(e.key.toLowerCase())
  ) {
    e.preventDefault();
  }

  // F12 (DevTools)
  if (e.key === 'F12') {
    e.preventDefault();
  }
});

// Extra protection for certificate images only
document.querySelectorAll('.cert-thumb').forEach(img => {

  // Disable right-click on images
  img.addEventListener('contextmenu', e => e.preventDefault());

  // Disable dragging image
  img.setAttribute('draggable', 'false');

  // Block long-press on mobile
  img.addEventListener('touchstart', e => {
    e.preventDefault();
  }, { passive: false });

});
