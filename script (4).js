// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navigation = document.getElementById('navigation');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        // Animate hamburger menu
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
            hamburgers.forEach((line, index) => {
                line.style.transform = 'rotate(0deg)';
                line.style.opacity = '1';
            });
        });
    });
    
    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navigation.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navigation.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });
    
    // Smooth scrolling for navigation links
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
    
    // Button scroll functionality
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
});

// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showToast('Message sent successfully! Thank you for reaching out. I\'ll get back to you soon.', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
});

// Resume download functionality - Simple and reliable approach
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create comprehensive resume content
            const resumeContent = `ADITYA SAHNI
Data Engineer | Business Analytics
Email: Sahniaditya6@gmail.com | Phone: 716-306-9070
Location: North Brunswick, NJ
LinkedIn: linkedin.com/in/aditya-sahni21

SUMMARY
Data Engineer with 1.5+ years of experience at Tata Consultancy Services, graduated with a Master of Science in Business Analytics. Delivered 30+ data pipelines with Azure tools, improved processing speed and accuracy. Proven ability to manage data integration, ETL processes, and support data-driven decision-making in enterprise environments.

PROFESSIONAL EXPERIENCE
Data Engineer | Tata Consultancy Services | Noida                          Oct 2022 - Jun 2024
• Developed and automated over 30 data pipelines using Azure Data Factory and Python, reducing processing time by 30% and increasing data accuracy by 20%
• Developed 15+ custom Power BI dashboards based on stakeholder specifications, providing actionable insights into key performance indicators (KPIs) across business units
• Implemented industry's best practices for data warehousing within the Azure Synapse environment, optimizing data retrieval processes by 40% and reducing storage redundancy by 15%
• Managed data engineering efforts for an airline client by aligning deliverables across 3 stakeholder teams, tracking 10+ ETL pipeline milestones, and proactively resolving 5+ critical risks ensuring 100% on-time dashboard delivery
• Enhanced expertise by receiving comprehensive training in SQL Server Integration Services (SSIS) for constructing reliable ETL workflows for large-scale data processing
• Spearheaded the creation of a comprehensive data dictionary for the team, ensuring all members understood data definitions; reduced onboarding time for new hires by 1 week

EDUCATION
UNIVERSITY AT BUFFALO, THE STATE UNIVERSITY OF NEW YORK              Jul 2024 - Jun 2025
Master of Science, Business Analytics (STEM) | GPA: 3.95/4.0
Relevant Coursework: DBMS, Statistical Analytics, Predictive Analytics, Distributed Computing & Big Data, Cloud Data Warehousing & Data Engineering, Model Managerial Process, Data Visualization, Applied AI for Manager, Digital Marketing Analytics

BHARATI VIDYAPEETH COLLEGE OF ENGINEERING, PUNE                      Jun 2018 - Jul 2022
Bachelor of Technology, Electronics and Telecommunications Engineering | GPA: 3.20/4.0

ACADEMIC PROJECTS
Valorlytics - RAG-Based Esports Analytics Assistant                       Jan 2025 - Feb 2025
• Developed an AI-powered assistant to analyze player performance data and deliver real-time, query-based strategic feedback

Earthquake Data Analysis                                                  Dec 2024 - Jan 2025
• Built a real-time earthquake data pipeline using Azure Data Factory, Azure Databricks, and Azure Synapse Analytics for efficient data ingestion and transformation
• Designed intuitive Power BI dashboards using real-time data feeds from data warehouse to improve disaster management and real-time risk assessment

Integrated Warehousing System: Hop-Oracle Cloud ETL Pipeline             Aug 2024 - Oct 2024
• Consolidated disparate sales data sources into a centralized Oracle Cloud data warehouse, increasing data consistency and reducing reporting errors by 25%
• Launched interactive Tableau dashboards connected to the data warehouse, enabling stakeholders to visualize key performance indicators and improve decision-making speed by 20%

TECHNICAL SKILLS
• Tools: SSIS, Azure Data Factory (ADF), Power BI, Jira, Tableau, Excel, Looker Studio
• Data Warehousing and Integration: Data Modeling (Star/Snowflake), ETL/ELT, Data Integration
• Databases and Cloud: SQL Server, Azure SQL Database, Oracle, Big Query, Amazon Redshift, Azure Synapse
• Programming: Python, SQL, R, DAX
• Statistical Analysis: Hypothesis Testing, Regression Analysis, A/B Testing, Predictive Modelling

CERTIFICATIONS
• Microsoft Certified: Power BI Data Analyst Associate
• Microsoft Azure Data Fundamentals DP-900
• Udemy SQL Server Integration Services (SSIS) - An Introduction`;

            try {
                // Create downloadable text file
                const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                
                link.href = url;
                link.download = 'Aditya_Sahni_Resume.txt';
                link.style.display = 'none';
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Clean up
                setTimeout(() => {
                    window.URL.revokeObjectURL(url);
                }, 100);
                
                showToast('Resume downloaded successfully!', 'success');
                
            } catch (error) {
                console.error('Download failed:', error);
                showToast('Download failed. Please contact Aditya at Sahniaditya6@gmail.com', 'error');
            }
        });
    }
});

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

// Intersection Observer for animations
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

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('fade-in');
        observer.observe(header);
    });
    
    // Add slide-in animations to content
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
    
    // Add fade-in to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
    
    // Add fade-in to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Add fade-in to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('fade-in');
        category.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(category);
    });
    
    // Add fade-in to certification cards
    const certificationCards = document.querySelectorAll('.certification-card');
    certificationCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add slide-in to contact info and form
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
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card, .skill-category, .certification-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Scroll progress indicator (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll progress bar
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
});

// Add typing effect to hero title (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add particles background effect (lightweight version)
document.addEventListener('DOMContentLoaded', function() {
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