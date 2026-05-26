document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.classList.remove('active');
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const experienceCards = document.querySelectorAll('.experience-card');
    const projectCards = document.querySelectorAll('.project-card');

    experienceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });

    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    });

    const experienceObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                experienceCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateX(0)';
                    }, index * 100);
                });
                experienceObserver.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
                projectObserver.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const experienceSection = document.querySelector('#experience');
    const projectsSection = document.querySelector('#projects');

    if (experienceSection) experienceObserver.observe(experienceSection);
    if (projectsSection) projectObserver.observe(projectsSection);

    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${0.1 + index * 0.1}s, transform 0.5s ease ${0.1 + index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 500 + index * 100);
    });

    const skillCategories = document.querySelectorAll('.skill-category');
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCategories.forEach((category, index) => {
                    category.style.opacity = '0';
                    category.style.transform = 'scale(0.95)';
                    category.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
                    
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'scale(1)';
                    }, index * 200);
                });
                skillsObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) skillsObserver.observe(skillsSection);
});