// ============================================
// MDAE - MagistÃ¨re de Droit des ActivitÃ©s Ã‰conomiques
// Global JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.nav__mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.toggle('open');
            mobileBtn.setAttribute('aria-expanded', isOpen);
            
            // Update icon
            if (isOpen) {
                mobileBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
            } else {
                mobileBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
            }
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu && mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                        mobileBtn.setAttribute('aria-expanded', 'false');
                        mobileBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
                    }
                }
            }
        });
    });

    // Form Submission Handler
    const contactForm = document.querySelector('.contact__form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Vos informations ont bien Ã©tÃ© envoyÃ©es !');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Active Navigation Link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link, .nav__mobile-link');
    
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.card, .news__card, .profile').forEach(function(el) {
        observer.observe(el);
    });

});
