/* ==========================================================================
   SAMAR KUMAR — Portfolio Interactions
   Navigation, Scroll Animations, Particles, Filters, Form
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========== SMOOTH SCROLL (LENIS) ==========
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // ========== NAVBAR SCROLL EFFECT ==========
  const navbar = document.getElementById('navbar');

  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });


  // ========== MOBILE MENU ==========
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }


  // ========== ACTIVE NAV LINK HIGHLIGHT ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });


  // ========== SCROLL REVEAL ANIMATION ==========
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ========== CERTIFICATIONS SHOWCASE SWITCHER ==========
  const certificates = [
    {
      title: "Excel and Copilot Fundamentals",
      category: "PRODUCTIVITY",
      issuer: "Microsoft",
      date: "September 2026",
      image: "collections/ExcelCopilotCertificate.jpg",
      tags: ["Microsoft Excel", "Copilot"],
      credential: "https://coursera.org/verify/LT0KLUGEYIN8"
    },
    {
      title: "Generative AI: Prompt Engineering Basics",
      category: "GENERATIVE AI",
      issuer: "IBM",
      date: "September 2026",
      image: "collections/PromptEngineeringCertificate.jpg",
      tags: ["Prompt Engineering", "Generative AI"],
      credential: "https://coursera.org/verify/AXXJ7B0YMVHK"
    },
    {
      title: "Data Analysis with Python",
      category: "DATA SCIENCE",
      issuer: "IBM",
      date: "September 2026",
      image: "collections/DataPythonIBMCertificate.jpg",
      tags: ["Python", "Data Analysis"],
      credential: "https://coursera.org/verify/6N8HJ3ZE5TOX"
    },
    {
      title: "SQL Foundations",
      category: "DATABASES",
      issuer: "Microsoft",
      date: "September 2026",
      image: "collections/SQLFoundationsCertificate.jpg",
      tags: ["SQL", "Database Management"],
      credential: "https://coursera.org/verify/7YMMAXJGK0ND"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      category: "ARTIFICIAL INTELLIGENCE",
      issuer: "IBM",
      date: "September 2026",
      image: "collections/IntroductionToALCertificate(1).jpg",
      tags: ["AI Fundamentals", "Machine Learning"],
      credential: "https://coursera.org/verify/TA07KTV1JM2N"
    },
    {
      title: "Introduction to Data Analysis Using Python",
      category: "DATA ANALYTICS",
      issuer: "Google",
      date: "September 2026",
      image: "collections/DataAnalysisPythonCertificate.jpg",
      tags: ["Python", "Data Analysis"],
      credential: "https://coursera.org/verify/NUPW2GFPEME9"
    },
    {
      title: "What is Data Science?",
      category: "DATA SCIENCE",
      issuer: "IBM",
      date: "September 2026",
      image: "collections/DS_IBM%20Certificate.jpg",
      tags: ["Data Science", "Data Literacy"],
      credential: "https://coursera.org/verify/CZUIZBLSOMT3"
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      category: "DATA ANALYTICS",
      issuer: "Google",
      date: "September 2026",
      image: "collections/FoundationsDataCertificate(1).jpg",
      tags: ["Data Analytics", "Data-Driven Decision Making"],
      credential: "https://coursera.org/verify/3RF0U5O7UVSP"
    },
    {
      title: "Engineering Reports and Research Publishing (2025 CSET202)",
      category: "RESEARCH & DEVELOPMENT",
      issuer: "Bennett University",
      date: "September 2026",
      image: "collections/EngineeringReportsCertificate.jpg",
      tags: ["Technical Writing", "Research Publishing"],
      credential: "https://coursera.org/verify/IXG0PYTF9UYL"
    },
    {
      title: "Python Skill Up",
      category: "PROGRAMMING",
      issuer: "GeeksforGeeks",
      date: "Dec 2025",
      image: "collections/GFG_Python%20copy.jpg",
      tags: ["Python", "Databases", "Standard Libraries"],
      credential: "https://www.geeksforgeeks.org/certificate/47b6b104c04e60f9dab21a7d75ab1933?utm_source=socials&utm_medium=cc_link"
    }
  ];

  const selectBtns = document.querySelectorAll('.cert-select-btn');
  const imgMain = document.getElementById('cert-img-main');
  const imgBackLeft = document.getElementById('cert-img-back-left');
  const imgBackRight = document.getElementById('cert-img-back-right');
  const txtCategory = document.getElementById('cert-category');
  const txtTitle = document.getElementById('cert-title');
  const txtIssuer = document.getElementById('cert-issuer');
  const txtDate = document.getElementById('cert-date');
  const wrapperTags = document.getElementById('cert-tags');
  const wrapperActions = document.getElementById('cert-actions');

  const updateShowcase = (index) => {
    const cert = certificates[index];
    const len = certificates.length;

    // Determine backing images (adjacent index wrapping)
    const prevCert = certificates[(index - 1 + len) % len];
    const nextCert = certificates[(index + 1) % len];

    // Smooth transition: temporary fade class
    const showcaseContainer = document.querySelector('.cert-main-showcase');
    if (showcaseContainer) {
      showcaseContainer.style.opacity = '0.7';
      showcaseContainer.style.transform = 'translateY(2px)';
    }

    setTimeout(() => {
      // Update image sources
      if (imgMain) imgMain.src = cert.image;
      if (imgBackLeft) imgBackLeft.src = prevCert.image;
      if (imgBackRight) imgBackRight.src = nextCert.image;

      // Update text
      if (txtCategory) txtCategory.textContent = cert.category;
      if (txtTitle) txtTitle.textContent = cert.title;
      if (txtIssuer) txtIssuer.textContent = cert.issuer;
      if (txtDate) txtDate.textContent = cert.date;

      // Rebuild tags
      if (wrapperTags) {
        wrapperTags.innerHTML = '';
        cert.tags.forEach(tag => {
          const tagSpan = document.createElement('span');
          tagSpan.className = 'cert-showcase-tag';
          tagSpan.textContent = tag;
          wrapperTags.appendChild(tagSpan);
        });
      }

      // Rebuild actions/button
      if (wrapperActions) {
        wrapperActions.innerHTML = '';
        if (cert.credential) {
          const linkBtn = document.createElement('a');
          linkBtn.href = cert.credential;
          linkBtn.id = 'cert-link';
          linkBtn.className = 'cert-action-btn';
          linkBtn.target = '_blank';
          linkBtn.rel = 'noopener noreferrer';
          linkBtn.innerHTML = `
            <span>View Credential</span>
            <svg class="cert-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          `;
          wrapperActions.appendChild(linkBtn);
        } else {
          const noUrlSpan = document.createElement('span');
          noUrlSpan.className = 'cert-no-url';
          noUrlSpan.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>No credential URL available</span>
          `;
          wrapperActions.appendChild(noUrlSpan);
        }
      }

      // End transition
      if (showcaseContainer) {
        showcaseContainer.style.opacity = '1';
        showcaseContainer.style.transform = 'translateY(0)';
        showcaseContainer.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      }
    }, 120);
  };

  selectBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      selectBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateShowcase(idx);
    });
  });


  // ========== CONTACT FORM ==========
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show success message
      formSuccess.classList.add('show');

      // Reset form
      contactForm.reset();

      // Hide success after 4 seconds
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 4000);
    });
  }


  // ========== BACK TO TOP ==========
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }





  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        // Use Lenis scroll if defined, otherwise fallback to native smooth scroll
        if (typeof lenis !== 'undefined') {
          lenis.scrollTo(target, { offset: -80 });
        } else {
          const offset = 80; // navbar height
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // ========== JOURNEY INTERACTIVE DECK ==========
  const selectorCards = document.querySelectorAll('.selector-card');
  const detailCards = document.querySelectorAll('.deck-detail-card');
  const deckOverlay = document.getElementById('deck-overlay');
  const deckCloseBtn = document.getElementById('deck-close-btn');

  if (selectorCards.length && detailCards.length && deckOverlay) {
    // Open card detail modal
    selectorCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = card.getAttribute('data-index');

        // Reset active status
        selectorCards.forEach(c => c.classList.remove('active'));
        detailCards.forEach(d => d.classList.remove('active'));

        // Set active statuses
        card.classList.add('active');
        const targetDetail = document.querySelector(`.deck-detail-card[data-card-index="${index}"]`);
        if (targetDetail) {
          targetDetail.classList.add('active');
        }

        // Show overlay modal
        deckOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
      });
    });

    // Close function
    const closeDeckModal = () => {
      deckOverlay.classList.remove('active');
      selectorCards.forEach(c => c.classList.remove('active'));
      detailCards.forEach(d => d.classList.remove('active'));
      document.body.style.overflow = ''; // Unlock scrolling
    };

    // Close on click close button
    if (deckCloseBtn) {
      deckCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeDeckModal();
      });
    }

    // Close on click overlay backdrop background
    deckOverlay.addEventListener('click', (e) => {
      // Close only if click is outside the card details contents
      if (e.target === deckOverlay) {
        closeDeckModal();
      }
    });

    // Prevent closing when clicking inside detail card contents
    detailCards.forEach((detailCard) => {
      detailCard.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });

    // Close on pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && deckOverlay.classList.contains('active')) {
        closeDeckModal();
      }
    });
  }

});
