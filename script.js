document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open");
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
      });
    });
  }

  // Scroll suave para anclas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Lightbox para galería de instalaciones
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  if (lightbox && lightboxImg && lightboxVideo) {
    document.querySelectorAll('.galeria-img').forEach(media => {
      media.addEventListener('click', function(e) {
        e.stopPropagation();
        if (this.tagName === 'VIDEO') {
          lightboxImg.style.display = 'none';
          lightboxVideo.style.display = 'block';
          lightboxVideo.src = this.src;
          lightboxVideo.currentTime = 0;
          lightboxVideo.play();
        } else {
          lightboxVideo.pause();
          lightboxVideo.style.display = 'none';
          lightboxImg.style.display = 'block';
          lightboxImg.src = this.src;
        }
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
    lightbox.addEventListener('click', function() {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      lightboxImg.style.display = 'none';
      lightboxVideo.pause();
      lightboxVideo.src = '';
      lightboxVideo.style.display = 'none';
      document.body.style.overflow = '';
    });
  }
});
