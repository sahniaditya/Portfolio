// ✅ FULL UPDATED script.js — final version

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navigation = document.getElementById('navigation');

  // Mobile menu toggle
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

  // Close mobile menu when clicking on links
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

  // Navigation scroll effect
  window.addEventListener('scroll', function() {
    navigation.style.background = window.scrollY > 50
      ? 'rgba(255, 255, 255, 0.95)'
      : 'rgba(255, 255, 255, 0.9)';
  });

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // Hero button smooth scroll
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    });
  });

  // ✅ Resume download inside DOMContentLoaded
  const downloadBtn = document.getElementById('download-resume');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = 'Aditya_Sahni_Resume.pdf';
      link.download = 'Aditya_Sahni_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Resume download started!', 'success');
    });
  }

  // Section animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-header').forEach(header => {
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

  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.classList.add('fade-in');
    item.style.transitionDelay = `${i * 0.2}s`;
    observer.observe(item);
  });

  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${i * 0.2}s`;
    observer.observe(card);
  });

  document.querySelectorAll('.skill-category').forEach((cat, i) => {
    cat.classList.add('fade-in');
    cat.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(cat);
  });

  document.querySelectorAll('.certification-card').forEach((card, i) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(card);
  });

  const contactInfo = document.querySelector('.contact-info');
  const contactForm = document.querySelector('.contact-form-container');
  if (contactInfo) {
    contactInfo.classList.add('slide-in-left');
    observer.observe(contactInfo);
  }
  if (contactForm) {
    contactForm.classList.add('slide-in-right');
    observer.observe(contactForm);
  }

  // Card hover lift
  document.querySelectorAll('.project-card, .skill-category, .certification-card').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px)');
    card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
  });

  // Scroll progress bar
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `position: fixed; top: 0; left: 0; width: 0%; height: 3px; background: linear-gradient(90deg, #3b82f6, #1e40af); z-index: 9999; transition: width 0.1s ease;`;
  document.body.appendChild(progressBar);
  window.addEventListener('scroll', () => {
    const percent = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = percent + '%';
  });

  // Hero typing
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

  // Hero particles background
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.1;`;
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
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
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
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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

// ✅ Shared toast function
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  toastMessage.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 4000);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  if (!name || !email || !message) {
    showToast('Please fill in all fields', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  const submitBtn = this.querySelector('.form-submit');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  setTimeout(() => {
    showToast('Message sent successfully! Thank you for reaching out.', 'success');
    this.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1000);
});
