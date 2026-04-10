// Alexandra Carter - Luxury Real Estate Website
// Main JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // === Navbar Scroll Effect ===
  const navbar = document.getElementById('navbar');
  const handleNavScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // === Mobile Navigation ===
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // === Smooth Scroll for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // === Scroll Animations (Intersection Observer) ===
  const animateElements = document.querySelectorAll('[data-animate]');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation based on sibling index
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.querySelectorAll('[data-animate]'));
        const siblingIndex = siblings.indexOf(entry.target);
        const delay = siblingIndex * 100;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        animateObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach(el => animateObserver.observe(el));

  // === Listings Filter ===
  const filterBtns = document.querySelectorAll('.filter-btn');
  const listingCards = document.querySelectorAll('.listing-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      listingCards.forEach(card => {
        if (filter === 'all' || card.dataset.status === filter) {
          card.classList.remove('hidden');
          card.classList.add('visible');
        } else {
          card.classList.add('hidden');
          card.classList.remove('visible');
        }
      });
    });
  });

  // === Testimonials Carousel ===
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  let currentTestimonial = 0;
  let autoplayInterval;

  function showTestimonial(index) {
    testimonialCards.forEach(card => {
      card.classList.remove('active');
      card.style.opacity = '0';
      card.style.transform = 'translateX(50px)';
      card.style.position = 'absolute';
    });

    dots.forEach(dot => dot.classList.remove('active'));

    currentTestimonial = index;

    testimonialCards[currentTestimonial].classList.add('active');
    testimonialCards[currentTestimonial].style.opacity = '1';
    testimonialCards[currentTestimonial].style.transform = 'translateX(0)';
    testimonialCards[currentTestimonial].style.position = 'relative';

    dots[currentTestimonial].classList.add('active');
  }

  function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(next);
  }

  function prevTestimonial() {
    const prev = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(prev);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextTestimonial, 6000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoplay();
      nextTestimonial();
      startAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      stopAutoplay();
      prevTestimonial();
      startAutoplay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      showTestimonial(parseInt(dot.dataset.index));
      startAutoplay();
    });
  });

  // Initialize first testimonial
  showTestimonial(0);
  startAutoplay();

  // === Contact Form ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Show a success message (in production, this would submit to a backend)
      const btn = contactForm.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = '#c9a96e';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // === Active Nav Link on Scroll ===
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function highlightNavLink() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);

  // === Parallax Effect on Hero ===
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      const offset = window.scrollY * 0.4;
      hero.style.backgroundPositionY = `calc(50% + ${offset}px)`;
    }
  });

});
