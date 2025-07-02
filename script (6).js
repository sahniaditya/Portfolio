// ✅ Global: downloadResume so onclick works
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'Aditya_Sahni_Resume.pdf';
  link.download = 'Aditya_Sahni_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Resume download started!', 'success');
}

// ✅ Global: showToast
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  toastMessage.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 4000);
}

// ✅ Everything else inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navigation = document.getElementById('navigation');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
      hamburgers.forEach((line, index) => {
        if (mobileMenu.classList.contains('hidden')) {
          line.style.transform = 'rotate(0deg)';
          line.style.opacity = '1';
        } else {
          if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) line.style.opacity = '0';
          if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        }
      });
    });

    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
        hamburgers.forEach(line => {
          line.style.transform = 'rotate(0deg)';
          line.style.opacity = '1';
        });
      });
    });
  }

  // Navigation scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navigation.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
      navigation.style.background = 'rgba(255, 255, 255, 0.9)';
    }
  });

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Smooth scroll for hero buttons
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    header.classList.add('fade-in');
    observer.observe(header);
  });

  const aboutContent = document.querySelector('.about-content');
  const aboutImage = document.querySelector('.about-image');
  if (aboutContent) {
    aboutContent.classList.add('slide-in-right');
    observer.observe(aboutContent);
  }
  if (aboutImage) {
    aboutImage.classList.add('slide-in-left');
    observer.observe(aboutImage);
  }

  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
  });

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach((category, index) => {
    category.classList.add('fade-in');
    category.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(category);
  });

  const certificationCards = document.querySelectorAll('.certification-card');
  certificationCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  const contactInfo = document.querySelector('.contact-info');
  const contactFormContainer = document.querySelector('.contact-form-container');
  if (contactInfo) {
    contactInfo.classList.add('slide-in-left');
    observer.observe(contactInfo);
  }
  if (contactFormContainer) {
    contactFormContainer.classList.add('slide-in-right');
    observer.observe(contactFormContainer);
  }

  // Card hover
  const cards = document.querySelectorAll('.project-card, .skill-category, .certification-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Scroll progress
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #1e40af);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });

  // Hero typing effect
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.borderRight = '2px solid #3b82f6';
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        heroTitle.style.borderRight = 'none';
      }
    };
    setTimeout(typeWriter, 500);
  }

  // Hero particles
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0.1;
    `;
    heroSection.style.position = 'relative';
    heroSection.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#3b82f6';
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    createParticles();
    animateParticles();
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
  }

});
