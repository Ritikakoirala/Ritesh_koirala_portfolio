const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');
toggle.onclick = () => { nav.classList.toggle('active'); };
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { target.scrollIntoView({ behavior: 'smooth' }); nav.classList.remove('active'); }
  });
});
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
const galleryImages = [
  'image/20230213_172210.jpg',
  'image/20230415_093009.jpg',
  'image/WhatsApp Image 2026-05-17 at 1.05.26 PM.jpeg',
  'image/IMG-20250303-WA0010~2.jpg',
  'image/IMG-20250306-WA0022.jpg'
];
let currentSlide = 0;
function openLightbox(index) {
  currentSlide = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = galleryImages[currentSlide];
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= galleryImages.length) { currentSlide = 0; }
  else if (currentSlide < 0) { currentSlide = galleryImages.length - 1; }
  document.getElementById('lightbox-img').src = galleryImages[currentSlide];
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeLightbox(); }
  else if (e.key === 'ArrowLeft') { changeSlide(-1); }
  else if (e.key === 'ArrowRight') { changeSlide(1); }
});
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}
