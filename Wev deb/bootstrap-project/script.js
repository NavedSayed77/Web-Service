// Footer logo click scrolls to top
document.addEventListener('DOMContentLoaded', function() {
    var footerLogo = document.getElementById('footerLogoClick');
    if (footerLogo) {
        footerLogo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
// Initialize AOS (Animate On Scroll) with enhanced settings
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0,
        anchorPlacement: 'top-bottom'
    });
});

// Enhanced Navbar functionality with smooth transitions
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navbar links with perfect offset
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;
            const offsetTop = targetSection.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button with smooth animations
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
        setTimeout(() => {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transform = 'translateY(0) scale(1)';
        }, 10);
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'translateY(20px) scale(0.8)';
        setTimeout(() => {
            if (backToTopButton.style.opacity === '0') {
                backToTopButton.style.display = 'none';
            }
        }, 300);
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Add click animation
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Counter Animation for Statistics
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('%') ? '%' : '');
            }
        };
        
        updateCounter();
    });
}

// Enhanced Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                submitBtn.classList.add('btn-success');
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('btn-success');
                }, 2000);
            }, 1500);
        });
    }
});

// Particle Animation
function createParticleSystem() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: particleFloat ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize effects
document.addEventListener('DOMContentLoaded', function() {
    createParticleSystem();
    
    // Counter animation observer
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(aboutSection);
    }
});
