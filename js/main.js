(function() {
  'use strict';

  // ─── Gallery Data ───
  const galleryItems = [
    { title: 'Small Waist-Length Knotless Braids', category: 'knotless', bg: 'linear-gradient(135deg, #B8860B, #DAA520, #8B7355)' },
    { title: 'Small Box Braids — Butt Length', category: 'box', bg: 'linear-gradient(135deg, #5C4033, #8B6914, #CD853F)' },
    { title: 'Medium Mid-Back Boho Knotless', category: 'boho', bg: 'linear-gradient(135deg, #704214, #C8A24D, #DEB887)' },
    { title: 'Small Ponytail', category: 'ponytail', bg: 'linear-gradient(135deg, #3A2E28, #6B4226, #A0522D)' },
    { title: 'Large Ponytail', category: 'ponytail', bg: 'linear-gradient(135deg, #654321, #9B7653, #C4A265)' },
    { title: 'Small Knotless Braids — Butt Length', category: 'knotless', bg: 'linear-gradient(135deg, #2F1B14, #5C3A21, #8B6508)' },
    { title: 'Jumbo Triangle Knotless Braids', category: 'knotless', bg: 'linear-gradient(135deg, #483C32, #8B7D6B, #C4A265)' },
    { title: 'Small Bob-Length Knotless Braids', category: 'knotless', bg: 'linear-gradient(135deg, #4A3728, #8B7355, #C8A24D)' },
    { title: 'Small-Medium Senegalese Twists', category: 'twists', bg: 'linear-gradient(135deg, #2D1B0E, #5C3A21, #B8860B)' },
    { title: 'Full Sew-In', category: 'sew-in', bg: 'linear-gradient(135deg, #3C1414, #6B3A2E, #A0522D)' },
    { title: 'Two Cornrow Braids', category: 'cornrows', bg: 'linear-gradient(135deg, #D4A76A, #B8860B, #8B6914)' },
    { title: 'Small-Medium Knotless — Waist Length', category: 'knotless', bg: 'linear-gradient(135deg, #C8A24D, #A0522D, #704214)' },
    { title: 'Full Medium Boho Knotless', category: 'boho', bg: 'linear-gradient(135deg, #DEB887, #CD853F, #8B7355)' },
    { title: 'Small-Medium Box Braids', category: 'box', bg: 'linear-gradient(135deg, #B8860B, #6B4226, #3A2E28)' },
    { title: 'Stitch Braids', category: 'cornrows', bg: 'linear-gradient(135deg, #DAA520, #8B7355, #5C4033)' },
    { title: 'Feed-In Cornrows', category: 'cornrows', bg: 'linear-gradient(135deg, #9B7653, #654321, #3C1414)' },
    { title: 'Small Boho Knotless', category: 'boho', bg: 'linear-gradient(135deg, #C4A265, #8B6508, #4A3728)' },
    { title: 'Full Bob Boho Knotless', category: 'boho', bg: 'linear-gradient(135deg, #DEB887, #B8860B, #654321)' },
    { title: 'Stitch Butterfly Cornrows', category: 'cornrows', bg: 'linear-gradient(135deg, #DAA520, #A0522D, #483C32)' },
    { title: 'XS Box Braids — Waist Length', category: 'box', bg: 'linear-gradient(135deg, #C8A24D, #8B7D6B, #2D1B0E)' },
    { title: 'Cornrows', category: 'cornrows', bg: 'linear-gradient(135deg, #B8860B, #704214, #3A2E28)' },
    { title: 'Boho Knotless Twists', category: 'boho', bg: 'linear-gradient(135deg, #654321, #C8A24D, #DEB887)' },
    { title: 'Knotless Braids Waist Length', category: 'knotless', bg: 'linear-gradient(135deg, #8B6914, #DAA520, #F5DEB3)' },
    { title: 'Regular Box Braids Mid-Back', category: 'box', bg: 'linear-gradient(135deg, #5C4033, #A0522D, #CD853F)' }
  ];

  // ─── Populate Gallery ───
  function renderGallery(filter) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    const items = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);
    grid.innerHTML = items.map((item, i) => `
      <div class="gallery-item" data-index="${galleryItems.indexOf(item)}" style="animation-delay:${i * 40}ms;">
        <div class="gallery-item-bg" style="background:${item.bg};"></div>
        <div class="gallery-item-overlay">
          <div class="gallery-item-title">${item.title}</div>
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => openLightbox(parseInt(el.dataset.index)));
    });
  }

  // ─── Lightbox ───
  let currentLightboxIndex = 0;
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');

  function openLightbox(index) {
    if (!lightbox) return;
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('show');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function updateLightbox() {
    if (!lightboxImage || !lightboxTitle) return;
    const item = galleryItems[currentLightboxIndex];
    lightboxImage.style.background = item.bg;
    lightboxTitle.textContent = item.title;
  }

  if (lightbox) {
    const closeBtn = document.querySelector('.lightbox-close');
    const prevNav = document.querySelector('.lightbox-prev');
    const nextNav = document.querySelector('.lightbox-next');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevNav) prevNav.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightbox();
    });
    if (nextNav) nextNav.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
      updateLightbox();
    });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length; updateLightbox(); }
  });

  // ─── Gallery Filters ───
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  // Auto-render gallery if on gallery page
  if (document.getElementById('galleryGrid')) {
    renderGallery('all');
  }

  // ─── Mobile Nav ───
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  function openMobileNav() {
    if (!mobileToggle || !mobileNav || !mobileOverlay) return;
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileOverlay.style.display = 'block';
    requestAnimationFrame(() => mobileOverlay.classList.add('show'));
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav() {
    if (!mobileToggle || !mobileNav || !mobileOverlay) return;
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileOverlay.classList.remove('show');
    setTimeout(() => { mobileOverlay.style.display = 'none'; }, 300);
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.contains('open') ? closeMobileNav() : openMobileNav();
    });
  }
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileNav);
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
  }

  // ─── Header Scroll ───
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ─── Reviews Carousel ───
  const track = document.getElementById('reviewsTrack');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (track && dotsContainer) {
    const cards = track.querySelectorAll('.review-card');
    let currentSlide = 0;
    let slidesPerView = 3;

    function updateSlidesPerView() {
      if (window.innerWidth < 768) slidesPerView = 1;
      else if (window.innerWidth < 1024) slidesPerView = 2;
      else slidesPerView = 3;
    }

    function getTotalDots() {
      return Math.max(1, cards.length - slidesPerView + 1);
    }

    function updateCarousel() {
      const percent = (currentSlide * (100 / cards.length));
      track.style.transform = `translateX(-${percent}%)`;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function buildDots() {
      updateSlidesPerView();
      dotsContainer.innerHTML = '';
      const totalDots = getTotalDots();
      for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to review ${i + 1}`);
        dot.addEventListener('click', () => { currentSlide = i; updateCarousel(); });
        dotsContainer.appendChild(dot);
      }
      if (currentSlide >= totalDots) currentSlide = totalDots - 1;
      updateCarousel();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => {
      currentSlide = Math.max(0, currentSlide - 1);
      updateCarousel();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      currentSlide = Math.min(getTotalDots() - 1, currentSlide + 1);
      updateCarousel();
    });

    buildDots();
    window.addEventListener('resize', buildDots);

    // Touch/swipe support
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && nextBtn) nextBtn.click();
        else if (prevBtn) prevBtn.click();
      }
    }, { passive: true });
  }

  // ─── FAQ Accordion ───
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = '0';
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ─── Intersection Observer (scroll animations) ───
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // ─── Contact Form Validation ───
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Honeypot
      const honeypot = document.getElementById('website');
      if (honeypot && honeypot.value) return;

      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const message = document.getElementById('contactMessage');

      // Reset errors
      document.querySelectorAll('.form-error').forEach(err => err.style.display = 'none');
      document.querySelectorAll('.form-input, .form-textarea').forEach(inp => inp.style.borderColor = '');

      if (!name.value.trim()) {
        document.getElementById('nameError').style.display = 'block';
        name.style.borderColor = '#C2453D';
        valid = false;
      }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        email.style.borderColor = '#C2453D';
        valid = false;
      }
      if (!message.value.trim()) {
        document.getElementById('messageError').style.display = 'block';
        message.style.borderColor = '#C2453D';
        valid = false;
      }

      if (valid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#2D8B4E';
        submitBtn.disabled = true;
        setTimeout(() => {
          submitBtn.textContent = 'Send Message';
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3000);
      }
    });
  }

})();
