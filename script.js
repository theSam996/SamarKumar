/* ==========================================================================
   SAMAR KUMAR — Portfolio Interactions
   Navigation, Scroll Animations, Particles, Filters, Form
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

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
      title: "Python Skill Up",
      category: "Programming",
      issuer: "GeeksforGeeks",
      date: "Dec 2025",
      image: "collections/GFG_Python%20copy.jpg",
      tags: ["Python", "Databases", "Standard Libraries"],
      credential: "https://www.geeksforgeeks.org/certificate/47b6b104c04e60f9dab21a7d75ab1933?utm_source=socials&utm_medium=cc_link"
    },
    {
      title: "Data Science Course – Mastering the Fundamentals",
      category: "Data Science",
      issuer: "Scaler",
      date: "Dec 2025",
      image: "collections/DS_Scalar%20copy.png",
      tags: ["Data Science", "Python for Analysis"],
      credential: "https://moonshot.scaler.com/s/sl/AlGc5hCulj?_gl=1*1lrn2qg*_gcl_au*MTU5MDQ3OTI2MC4xNzYyOTAwMDk1*FPAU*MTU5MDQ3OTI2MC4xNzYyOTAwMDk1*_ga*MTE0MTI5ODk4OS4xNzYyOTAwMDk1*_ga_53S71ZZG1X*czE3NjYxNjUzNzIkbzQkZzEkdDE3NjYxNjY0MzkkajYwJGwwJGgxMzY1NjY5OTU1"
    },
    {
      title: "Code Slayer 2K25 – NIT Delhi Participation",
      category: "Hackathons",
      issuer: "Unstop",
      date: "Oct 2025",
      image: "collections/NITDelhiHackathon_page-0001%20copy.jpg",
      tags: ["Competitive Coding", "Problem Solving"],
      credential: "https://unstop.com/certificate-preview/a5a176fd-89f2-4fc2-bd0b-015067fb5066"
    },
    {
      title: "Hype Series – The Ultimate Hackathon Playbook",
      category: "Hackathons",
      issuer: "Growbinar",
      date: "Aug 2025",
      image: "collections/HypeCertificate%20copy%202.jpg",
      tags: ["Hackathon Strategy", "Innovation"],
      credential: ""
    },
    {
      title: "Machine Learning with MATLAB",
      category: "AI/ML",
      issuer: "MathWorks",
      date: "Sep 2025",
      image: "collections/MATLAB%20Certificate%20copy.jpg",
      tags: ["Machine Learning", "MATLAB"],
      credential: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=aa840531-fd97-4eda-9630-efb9c796a3e2&"
    },
    {
      title: "Business Analysis Basics",
      category: "Business",
      issuer: "Simplilearn",
      date: "Dec 2025",
      image: "collections/BA_basics%20copy.jpg",
      tags: ["Business Strategy", "Communication"],
      credential: "https://simpli-web.app.link/e/Xh6A32KJiZb"
    },
    {
      title: "Introduction to Programming Using Python",
      category: "Programming",
      issuer: "Infosys Springboard",
      date: "Oct 2025",
      image: "collections/Infosys%20Python%20Certificate_page-0001%20copy.jpg",
      tags: ["Python Programming", "Fundamentals"],
      credential: "https://verify.onwingspan.com"
    },
    {
      title: "Beyond the Browser: Angular Meets Generative AI",
      category: "Web + AI",
      issuer: "D4 Community",
      date: "Jan 2026",
      image: "collections/Samar%20Kumar%20-%20Participation%20Certificate_page-0001%20copy.jpg",
      tags: ["Angular", "Generative AI"],
      credential: ""
    },
    {
      title: "Kotler's Maniac of B.A.S.H 8.0 – IIT BHU",
      category: "Business Strategy",
      issuer: "Unstop",
      date: "Jan 2026",
      image: "collections/IITBhuCertificate_page-0001%20copy.jpg",
      tags: ["Case Solving", "Strategic Thinking"],
      credential: "https://unstop.com/certificate-preview/9fbc1099-8402-451d-adb3-3cbe70b539f0"
    },
    {
      title: "Basics Tutorial on Business",
      category: "Business",
      issuer: "Simplilearn",
      date: "Dec 2025",
      image: "collections/BasicsOnBusiness%20copy.jpg",
      tags: ["Business Laws", "SWOT", "Planning"],
      credential: "https://simpli-web.app.link/e/i3MK4QR7iZb"
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
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
