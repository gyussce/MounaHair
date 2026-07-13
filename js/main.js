(function() {
  'use strict';

  // ─── SVG Star Helper (replaces emoji stars) ───
  const starSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  function renderStars(count) { return Array(count).fill(starSVG).join(''); }

  // ─── Style Explorer Data ───
  const explorerStyles = [
    { id: 1, name: 'Knotless Braids', category: 'braids', tags: ['Protective', 'Lightweight', 'Versatile'],
      desc: 'Gentle on the scalp with a natural, seamless finish. Available in small, medium, and large sizes, from bob to butt length. The feed-in technique distributes weight evenly, reducing tension and promoting hair health.',
      details: 'Duration: 4-8 hours depending on size and length. Lasts 6-8 weeks with proper care. Kanekalon braiding hair included.',
      img: 'img/gallery/small-waist-knotless.jpg' },
    { id: 2, name: 'Boho Knotless Braids', category: 'braids', tags: ['Trendy', 'Textured', 'Boho'],
      desc: 'A bohemian twist on the classic knotless — loose, curly ends for a carefree, textured look. Perfect for a laid-back yet polished aesthetic.',
      details: 'Duration: 5-9 hours. Kanekalon braiding hair included. Human hair for curly ends available for purchase.',
      img: 'img/gallery/full-medium-boho-knotless.jpg' },
    { id: 3, name: 'Box Braids', category: 'braids', tags: ['Classic', 'Durable', 'Versatile'],
      desc: 'The timeless classic. Clean, defined partings with versatile styling options. Available in XS to jumbo sizes and various lengths.',
      details: 'Duration: 4-10 hours depending on size. Lasts 6-8 weeks. Great for updos and half-up styles.',
      img: 'img/gallery/small-medium-box-braids.jpg' },
    { id: 4, name: 'Senegalese Twists', category: 'twists', tags: ['Elegant', 'Polished', 'Smooth'],
      desc: 'Smooth, rope-like twists for an elegant, polished look. Available in regular and knotless techniques with various size options.',
      details: 'Duration: 4-7 hours. Available in small, medium, and large. Lasts 6-8 weeks.',
      img: 'img/gallery/senegalese-twist.jpg' },
    { id: 5, name: 'Cornrows & Feed-In', category: 'cornrows', tags: ['Sleek', 'Sculpted', 'Intricate'],
      desc: 'Sleek, sculpted cornrow designs, including stitch braids, French braids, and intricate feed-in patterns. From simple to elaborate.',
      details: 'Duration: 1-4 hours. Lasts 2-4 weeks. Great for active lifestyles.',
      img: 'img/gallery/feed-in-cornrows.jpg' },
    { id: 6, name: 'Triangle & Fulani', category: 'braids', tags: ['Geometric', 'Eye-catching', 'Cultural'],
      desc: 'Geometric triangle partings and Fulani-inspired styles for a distinctive, eye-catching look. Available in knotless and boho variations.',
      details: 'Duration: 5-8 hours. Lasts 6-8 weeks. Perfect for a unique statement look.',
      img: 'img/gallery/jumbo-triangle-knotless.jpg' },
    { id: 7, name: 'Sew-Ins & Weaves', category: 'weaves', tags: ['Volume', 'Length', 'Natural'],
      desc: 'Full sew-in weaves and partial installs for length, volume, and versatility. Professional installation for a natural, secure finish.',
      details: 'Duration: 2-4 hours. Lasts 6-8 weeks. Bring your own hair or purchase in salon.',
      img: 'img/gallery/sew-in.jpg' },
    { id: 8, name: 'Crochet Styles', category: 'weaves', tags: ['Quick', 'Lightweight', 'Versatile'],
      desc: 'Lightweight, versatile crochet installations in a variety of textures and curl patterns. A quick, comfortable option with stunning results.',
      details: 'Duration: 1-3 hours. Lasts 4-8 weeks. Various textures available.',
      img: 'img/gallery/full-bob-boho-knotless.jpg' },
    { id: 9, name: 'Bora Bora Braids', category: 'braids', tags: ['Trending', 'Unique', 'Island-Inspired'],
      desc: 'The trending Bora Bora style — a unique, textured braiding technique for a standout, island-inspired look.',
      details: 'Duration: 5-8 hours. The hottest trend in braiding. Kanekalon hair included.',
      img: 'img/gallery/small-boho-knotless.jpg' },
    { id: 10, name: 'Ponytails & Specialty', category: 'specialty', tags: ['Custom', 'Creative', 'Unique'],
      desc: 'Braided ponytails, half-and-half styles, and custom specialty looks. Tell us your vision and we\'ll bring it to life.',
      details: 'Duration varies. Completely customizable. Contact us to discuss your vision.',
      img: 'img/gallery/small-ponytail.jpg' }
  ];

  // ─── Gallery Data ───
  const galleryItems = [
    { title: 'Small Waist-Length Knotless Braids', category: 'knotless', img: 'img/gallery/small-waist-knotless.jpg' },
    { title: 'Small Box Braids — Butt Length', category: 'box', img: 'img/gallery/small-box-braids-butt-length.jpg' },
    { title: 'Medium Mid-Back Boho Knotless', category: 'boho', img: 'img/gallery/medium-middle-back-boho-knotless.jpg' },
    { title: 'Small Ponytail', category: 'ponytail', img: 'img/gallery/small-ponytail.jpg' },
    { title: 'Large Ponytail', category: 'ponytail', img: 'img/gallery/large-ponytail.jpg' },
    { title: 'Small Knotless Braids — Butt Length', category: 'knotless', img: 'img/gallery/small-knotless-butt-length.jpg' },
    { title: 'Jumbo Triangle Knotless Braids', category: 'knotless', img: 'img/gallery/jumbo-triangle-knotless.jpg' },
    { title: 'Small Bob-Length Knotless Braids', category: 'knotless', img: 'img/gallery/small-bob-knotless.jpg' },
    { title: 'Small-Medium Senegalese Twists', category: 'twists', img: 'img/gallery/senegalese-twist.jpg' },
    { title: 'Full Sew-In', category: 'sew-in', img: 'img/gallery/sew-in.jpg' },
    { title: 'Two Cornrow Braids', category: 'cornrows', img: 'img/gallery/two-braids.jpg' },
    { title: 'Small-Medium Knotless — Waist Length', category: 'knotless', img: 'img/gallery/small-medium-knotless-waist.jpg' },
    { title: 'Full Medium Boho Knotless', category: 'boho', img: 'img/gallery/full-medium-boho-knotless.jpg' },
    { title: 'Small-Medium Box Braids', category: 'box', img: 'img/gallery/small-medium-box-braids.jpg' },
    { title: 'Stitch Braids', category: 'cornrows', img: 'img/gallery/stitch-braids.jpg' },
    { title: 'Feed-In Cornrows', category: 'cornrows', img: 'img/gallery/feed-in-cornrows.jpg' },
    { title: 'Small Boho Knotless', category: 'boho', img: 'img/gallery/small-boho-knotless.jpg' },
    { title: 'Full Bob Boho Knotless', category: 'boho', img: 'img/gallery/full-bob-boho-knotless.jpg' },
    { title: 'Stitch Butterfly Cornrows', category: 'cornrows', img: 'img/gallery/stitch-butterfly-cornrows.jpg' },
    { title: 'XS Box Braids — Waist Length', category: 'box', img: 'img/gallery/xs-box-braids-waist-1.png' },
    { title: 'Cornrows', category: 'cornrows', img: 'img/gallery/knotless-braids-1.png' },
    { title: 'Boho Knotless Twists', category: 'boho', img: 'img/gallery/knotless-braids-4.png' },
    { title: 'Knotless Braids Waist Length', category: 'knotless', img: 'img/gallery/knotless-braids-2.png' },
    { title: 'Regular Box Braids Mid-Back', category: 'box', img: 'img/gallery/xs-box-braids-waist-2.png' }
  ];

  // ─── Populate Gallery ───
  function renderGallery(filter) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    const items = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);
    grid.innerHTML = items.map((item, i) => `
      <div class="gallery-item" data-index="${galleryItems.indexOf(item)}" style="animation-delay:${i * 40}ms;">
        <img class="gallery-item-bg" src="${item.img}" alt="${item.title}" loading="lazy">
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
    lightboxImage.innerHTML = `<img src="${item.img}" alt="${item.title}" style="width:100%;height:100%;object-fit:contain;">`;
    lightboxTitle.textContent = item.title;
  }
  if (lightbox) {
    const closeBtn = document.querySelector('.lightbox-close');
    const prevNav = document.querySelector('.lightbox-prev');
    const nextNav = document.querySelector('.lightbox-next');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevNav) prevNav.addEventListener('click', () => { currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); });
    if (nextNav) nextNav.addEventListener('click', () => { currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length; updateLightbox(); });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  }
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length; updateLightbox(); }
  });

  // Gallery Filters
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });
  if (document.getElementById('galleryGrid')) renderGallery('all');

  // ─── Style Explorer ───
  const explorerGrid = document.getElementById('explorerGrid');
  const explorerModal = document.getElementById('explorerModal');

  function renderExplorer(filter) {
    if (!explorerGrid) return;
    const items = filter === 'all' ? explorerStyles : explorerStyles.filter(s => s.category === filter);
    explorerGrid.innerHTML = items.map(item => `
      <div class="explorer-item" data-id="${item.id}">
        <div class="explorer-item-visual"><img class="explorer-item-visual-bg" src="${item.img}" alt="${item.name}" loading="lazy"></div>
        <div class="explorer-item-info">
          <h3>${item.name}</h3>
          <p>${item.desc.substring(0, 100)}...</p>
          <div class="explorer-item-tags">${item.tags.map(t => `<span class="explorer-tag">${t}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');

    // Add 3D tilt to explorer items
    explorerGrid.querySelectorAll('.explorer-item').forEach(el => {
      el.addEventListener('click', () => openExplorerModal(parseInt(el.dataset.id)));
      addTiltEffect(el);
    });
  }

  function openExplorerModal(id) {
    if (!explorerModal) return;
    const style = explorerStyles.find(s => s.id === id);
    if (!style) return;
    const visual = explorerModal.querySelector('.explorer-modal-visual');
    const body = explorerModal.querySelector('.explorer-modal-body');
    visual.innerHTML = `<img src="${style.img}" alt="${style.name}" style="width:100%;height:100%;object-fit:cover;">`;
    body.innerHTML = `
      <h2>${style.name}</h2>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">${style.tags.map(t => `<span class="explorer-tag">${t}</span>`).join('')}</div>
      <p>${style.desc}</p>
      <p style="font-size:0.9rem;color:var(--warm-gray-light);border-top:1px solid var(--border-light);padding-top:16px;margin-top:8px;">${style.details}</p>
      <a href="https://mounahairbraidingweaves.as.me/" target="_blank" rel="noopener" class="btn btn-primary btn-lg" style="width:100%;margin-top:24px;">Book ${style.name}</a>
    `;
    explorerModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeExplorerModal() {
    if (!explorerModal) return;
    explorerModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (explorerModal) {
    const closeBtn = explorerModal.querySelector('.explorer-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeExplorerModal);
    explorerModal.addEventListener('click', (e) => { if (e.target === explorerModal) closeExplorerModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && explorerModal.classList.contains('show')) closeExplorerModal(); });
  }

  // Explorer filter buttons
  document.querySelectorAll('.explorer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.explorer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderExplorer(btn.dataset.filter);
    });
  });
  if (explorerGrid) renderExplorer('all');

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
  if (mobileToggle) mobileToggle.addEventListener('click', () => { mobileNav.classList.contains('open') ? closeMobileNav() : openMobileNav(); });
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);
  if (mobileNav) mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

  // ─── Header Scroll ───
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); }, { passive: true });
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
    function getTotalDots() { return Math.max(1, cards.length - slidesPerView + 1); }
    function updateCarousel() {
      const percent = (currentSlide * (100 / cards.length));
      track.style.transform = `translateX(-${percent}%)`;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => { dot.classList.toggle('active', i === currentSlide); });
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
    if (prevBtn) prevBtn.addEventListener('click', () => { currentSlide = Math.max(0, currentSlide - 1); updateCarousel(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { currentSlide = Math.min(getTotalDots() - 1, currentSlide + 1); updateCarousel(); });
    buildDots();
    window.addEventListener('resize', buildDots);

    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? nextBtn && nextBtn.click() : prevBtn && prevBtn.click(); }
    }, { passive: true });
  }

  // ─── FAQ Accordion ───
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
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

  // ─── 3D Tilt Effect ───
  function addTiltEffect(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  }

  // Apply tilt to hero image
  const heroFrame = document.querySelector('.hero-image-frame');
  if (heroFrame) addTiltEffect(heroFrame);

  // Apply tilt to review cards
  document.querySelectorAll('.review-card-inner').forEach(el => addTiltEffect(el));

  // ─── Split Text Animation ───
  function splitTextIntoChars(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const text = el.textContent;
    el.innerHTML = '';
    el.classList.add('split-text');
    let charIndex = 0;
    for (const char of text) {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char === ' ' ? ' ' : char;
      span.style.transitionDelay = `${charIndex * 30}ms`;
      el.appendChild(span);
      charIndex++;
    }
  }

  // Apply split text to hero heading
  const heroH1 = document.querySelector('.hero h1');
  if (heroH1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Split into words and wrap em tags
    const html = heroH1.innerHTML;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    splitTextIntoChars(heroH1);
  }

  // ─── Parallax on scroll ───
  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const morphs = document.querySelectorAll('.hero-morph');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      morphs.forEach((m, i) => {
        const speed = (i + 1) * 0.3;
        m.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, { passive: true });
  }
  initParallax();

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

    document.querySelectorAll('.reveal, .split-text, .stagger-grid, .animated-underline, .deco-line').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal, .split-text, .stagger-grid, .animated-underline').forEach(el => el.classList.add('visible'));
  }

  // ─── Contact Form Validation ───
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const honeypot = document.getElementById('website');
      if (honeypot && honeypot.value) return;
      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const message = document.getElementById('contactMessage');
      document.querySelectorAll('.form-error').forEach(err => err.style.display = 'none');
      document.querySelectorAll('.form-input, .form-textarea').forEach(inp => inp.style.borderColor = '');
      if (!name.value.trim()) { document.getElementById('nameError').style.display = 'block'; name.style.borderColor = '#C2453D'; valid = false; }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { document.getElementById('emailError').style.display = 'block'; email.style.borderColor = '#C2453D'; valid = false; }
      if (!message.value.trim()) { document.getElementById('messageError').style.display = 'block'; message.style.borderColor = '#C2453D'; valid = false; }
      if (valid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#2D8B4E';
        submitBtn.disabled = true;
        setTimeout(() => { submitBtn.textContent = 'Send Message'; submitBtn.style.background = ''; submitBtn.disabled = false; contactForm.reset(); }, 3000);
      }
    });
  }

  // ─── Smooth scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
