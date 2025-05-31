document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');

  if (lightbox && lightboxImg && lightboxVideo) {
    document.querySelectorAll('.galeria-img').forEach(media => {
      media.addEventListener('click', function(e) {
        e.stopPropagation();

        if (this.tagName === 'VIDEO') {
          // Reset estado previo del video
          lightboxVideo.pause();
          lightboxVideo.removeAttribute('src');
          lightboxVideo.load();

          // Establecer muted antes de cargar el src
          lightboxVideo.muted = true;
          lightboxVideo.setAttribute('muted', '');

          lightboxVideo.src = this.src;
          lightboxVideo.currentTime = 0;
          lightboxImg.style.display = 'none';
          lightboxVideo.style.display = 'block';

          // Esperar metadata para asegurar reproducción
          lightboxVideo.onloadedmetadata = () => {
            lightboxVideo.play();
          };
        } else {
          lightboxVideo.pause();
          lightboxVideo.removeAttribute('src');
          lightboxVideo.style.display = 'none';
          lightboxImg.src = this.src;
          lightboxImg.style.display = 'block';
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
      lightboxVideo.removeAttribute('src');
      lightboxVideo.style.display = 'none';
      document.body.style.overflow = '';
    });
  }
});
