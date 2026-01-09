/**
 * ==========================================
 * SPACE PORTFOLIO - JavaScript
 * Interactive Features & Animations
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initStars();
    initShootingStars();
    initNavigation();
    initScrollEffects();
    initAOSAnimations();
    initContactForm();
    initBackToTop();
    initSkillBars();
    initDecorativePlanets();
});

/**
 * ==========================================
 * STARS BACKGROUND
 * Creates animated twinkling stars
 * ==========================================
 */
function initStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --opacity: ${opacity};
        `;
        
        starsContainer.appendChild(star);
    }
}

/**
 * ==========================================
 * SHOOTING STARS
 * Disabled - creates visual artifacts
 * ==========================================
 */
function initShootingStars() {
    // Desactivado para evitar líneas blancas moviéndose
    return;
}

/**
 * ==========================================
 * NAVIGATION
 * Mobile menu toggle & active link handling
 * ==========================================
 */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Update active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Navbar background on scroll
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', () => {
        updateActiveLink();
        updateNavbar();
    });
}

/**
 * ==========================================
 * SCROLL EFFECTS
 * Parallax and scroll-triggered animations
 * ==========================================
 */
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Parallax effect for planets
    const planets = document.querySelectorAll('.hero-planet');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        planets.forEach((planet, index) => {
            const speed = (index + 1) * 0.1;
            planet.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

/**
 * ==========================================
 * AOS-LIKE ANIMATIONS
 * Scroll-triggered reveal animations
 * ==========================================
 */
function initAOSAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay if specified
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * ==========================================
 * SKILL BARS ANIMATION
 * Animate skill level bars on scroll
 * ==========================================
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.level-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.getPropertyValue('--level');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Initially set width to 0
    skillBars.forEach(bar => {
        const level = bar.style.getPropertyValue('--level');
        bar.style.setProperty('--level', level);
        bar.style.width = '0';
        observer.observe(bar);
    });
}

/**
 * ==========================================
 * DECORATIVE PLANETS
 * Scroll-triggered planet animations
 * ==========================================
 */
function initDecorativePlanets() {
    const planets = document.querySelectorAll('.deco-planet, .deco-moon');
    
    if (planets.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Delay based on data-speed attribute for staggered effect
                const speed = parseFloat(entry.target.getAttribute('data-speed')) || 0.5;
                const delay = speed * 300;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            } else {
                // Remove visible class when out of view for re-animation on scroll back
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    planets.forEach(planet => observer.observe(planet));
}

/**
 * ==========================================
 * CONTACT FORM
 * Form validation and submission handling
 * ==========================================
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Basic validation
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Enviando...</span>';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        try {
            await simulateSubmission(data);
            
            // Success feedback
            showNotification('¡Mensaje enviado con éxito! Te responderé pronto. 🚀', 'success');
            form.reset();
            
        } catch (error) {
            showNotification('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    function validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!data.name || data.name.trim().length < 2) {
            showNotification('Por favor, introduce un nombre válido.', 'error');
            return false;
        }
        
        if (!emailRegex.test(data.email)) {
            showNotification('Por favor, introduce un email válido.', 'error');
            return false;
        }
        
        if (!data.subject || data.subject.trim().length < 3) {
            showNotification('Por favor, introduce un asunto.', 'error');
            return false;
        }
        
        if (!data.message || data.message.trim().length < 10) {
            showNotification('El mensaje debe tener al menos 10 caracteres.', 'error');
            return false;
        }
        
        return true;
    }
    
    function simulateSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    console.log('Form submitted:', data);
                    resolve();
                } else {
                    reject(new Error('Submission failed'));
                }
            }, 1500);
        });
    }
}

/**
 * ==========================================
 * NOTIFICATION SYSTEM
 * Display toast notifications
 * ==========================================
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span class="notification-message">${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/**
 * ==========================================
 * BACK TO TOP BUTTON
 * Show/hide and scroll functionality
 * ==========================================
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * ==========================================
 * TYPING EFFECT (Optional Enhancement)
 * Typewriter effect for hero text
 * ==========================================
 */
function initTypingEffect() {
    const element = document.querySelector('.hero-subtitle');
    if (!element) return;
    
    const texts = ['Desarrollador Web', 'Frontend Developer', 'UI Designer', 'Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing effect after initial load
    setTimeout(type, 1500);
}

/**
 * ==========================================
 * CURSOR GLOW EFFECT (Optional Enhancement)
 * Follow cursor with glow effect
 * ==========================================
 */
function initCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        glow.style.opacity = '1';
    });
}

/**
 * ==========================================
 * CONSTELLATION CONNECTIONS (Optional)
 * Draw constellation lines between elements
 * ==========================================
 */
function initConstellations() {
    const canvas = document.createElement('canvas');
    canvas.className = 'constellation-canvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.insertBefore(canvas, document.body.firstChild);
    
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 50;
    const connectionDistance = 150;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createStars() {
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw stars
        stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;
            
            // Wrap around edges
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
            
            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();
        });
        
        // Draw connections
        stars.forEach((star1, i) => {
            stars.slice(i + 1).forEach(star2 => {
                const dx = star1.x - star2.x;
                const dy = star1.y - star2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(star1.x, star1.y);
                    ctx.lineTo(star2.x, star2.y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    resize();
    createStars();
    animate();
    
    window.addEventListener('resize', () => {
        resize();
        stars.length = 0;
        createStars();
    });
}

// Uncomment to enable optional features:
// initTypingEffect();
// initCursorGlow();
// initConstellations();

/**
 * ==========================================
 * INTERNATIONALIZATION (i18n)
 * Language switching between Spanish and English
 * ==========================================
 */
const translations = {
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.skills': 'Habilidades',
        'nav.timeline': 'Trayectoria',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contacto',
        
        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.subtitle': 'Ingeniero informático',
        'hero.description': 'Apasionado por la tecnología, la ciberseguridad y el desarrollo de soluciones innovadoras.',
        'hero.viewPortfolio': 'Ver Portfolio',
        'hero.downloadCV': 'Descargar CV',
        'hero.scroll': 'Scroll',
        
        // About
        'about.tag': 'Conóceme',
        'about.title': 'Sobre Mí',
        'about.photoPlaceholder': 'Tu foto aquí',
        'about.headline': 'Ingeniero informático especializado en tecnologías de la información',
        'about.bio': 'Soy un ingeniero informático con una sólida formación técnica y una gran curiosidad por el mundo de la ciberseguridad y el desarrollo de software. Me especializo en programación de bajo nivel, sistemas operativos y tecnologías web. Siempre en búsqueda de nuevos retos que me permitan crecer profesionalmente y aportar valor a través de soluciones eficientes y seguras.',
        'about.location': 'España',
        'about.role': 'Ingeniero',
        'about.status': 'Disponible',
        
        // Skills
        'skills.tag': 'Competencias',
        'skills.title': 'Habilidades',
        'skills.softSkills': 'Soft Skills',
        'skills.hardSkills': 'Hard Skills',
        'skills.teamwork': 'Trabajo en equipo',
        'skills.teamworkDesc': 'Colaboración efectiva en entornos multidisciplinares',
        'skills.communication': 'Comunicación',
        'skills.communicationDesc': 'Capacidad para transmitir ideas de forma clara',
        'skills.problemSolving': 'Resolución de problemas',
        'skills.problemSolvingDesc': 'Enfoque analítico ante desafíos complejos',
        'skills.continuousLearning': 'Aprendizaje continuo',
        'skills.continuousLearningDesc': 'Curiosidad constante por nuevas tecnologías',
        'skills.timeManagement': 'Gestión del tiempo',
        'skills.timeManagementDesc': 'Organización y cumplimiento de plazos',
        'skills.adaptability': 'Adaptabilidad',
        'skills.adaptabilityDesc': 'Flexibilidad ante cambios y nuevos retos',
        
        // Timeline
        'timeline.tag': 'Mi Viaje',
        'timeline.title': 'Trayectoria',
        'timeline.education': 'Formación Académica',
        'timeline.certifications': 'Certificaciones y Cursos',
        'timeline.experience': 'Experiencia y Proyectos',
        'timeline.edu1.date': '2022 - Actualidad',
        'timeline.edu1.title': 'Grado en Ingeniería Informática',
        'timeline.edu1.place': 'Escuela Superior de Informática (ESI)',
        'timeline.edu1.description': 'Formación integral en fundamentos de computación, programación, redes, bases de datos y desarrollo de software. Especialización en tecnologías de la información con enfoque práctico en proyectos reales.',
        'timeline.edu2.date': '2020 - 2022',
        'timeline.edu2.title': 'Bachiller Científico-Tecnológico',
        'timeline.edu2.place': 'IES Torreón del Alcázar',
        'timeline.edu2.description': 'Bachillerato con orientación científico-tecnológica. Base sólida en matemáticas, física y tecnología que sentó las bases para mi carrera en ingeniería informática.',
        'timeline.cert1.title': 'Curso de hacking ético y ciberseguridad',
        'timeline.exp1.title': 'Solución Web de E-commerce',
        'timeline.exp1.place': 'Proyecto e-commerce',
        'timeline.exp1.description': 'Solución completamente funcional de una web e-commerce para Asociación Iker',
        'timeline.exp2.title': 'Videojuego RPG',
        'timeline.exp2.place': 'Proyecto multimedia',
        'timeline.exp2.description': 'Desarrollo de juego RPG utilizando RPG maker como herramienta principal',
        
        // Portfolio
        'portfolio.tag': 'Mis Trabajos',
        'portfolio.title': 'Portfolio',
        'portfolio.project1.title': 'Solución E-commerce',
        'portfolio.project1.description': 'Plataforma web de comercio electrónico completa para la Asociación Iker. Incluye catálogo de productos, carrito de compras, pasarela de pagos y panel de administración.',
        'portfolio.project2.title': 'Despliegue Spotify con ICE',
        'portfolio.project2.description': 'Implementación y despliegue de un sistema distribuido tipo Spotify utilizando ZeroC ICE como middleware. Arquitectura cliente-servidor con streaming de audio.',
        'portfolio.project3.title': 'Gestión de Eventos',
        'portfolio.project3.description': 'Aplicación web para la gestión integral de eventos. Permite crear, editar y administrar eventos con sistema de inscripciones, notificaciones y calendario interactivo.',
        'portfolio.project4.title': 'App Móvil de Rutas',
        'portfolio.project4.description': 'Aplicación móvil para explorar y seguir rutas de senderismo y turismo. Integración con GPS, mapas interactivos y sistema de puntos de interés.',
        'portfolio.project5.title': 'Juego Pokémon',
        'portfolio.project5.description': 'Videojuego inspirado en la saga Pokémon con sistema de combates por turnos, captura de criaturas, evoluciones y exploración de mapas.',
        'portfolio.project6.title': 'Juego RPG',
        'portfolio.project6.description': 'Videojuego de rol con narrativa inmersiva, sistema de misiones, combates estratégicos y personalización de personajes. Desarrollado con RPG Maker.',
        
        // Contact
        'contact.tag': 'Hablemos',
        'contact.title': 'Contacto',
        'contact.description': '¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy a solo un mensaje de distancia.',
        'contact.emailLabel': 'Email',
        'contact.locationLabel': 'Ubicación',
        'contact.locationValue': 'España',
        'contact.form.name': 'Nombre',
        'contact.form.namePlaceholder': 'Tu nombre',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Asunto',
        'contact.form.subjectPlaceholder': '¿De qué quieres hablar?',
        'contact.form.message': 'Mensaje',
        'contact.form.messagePlaceholder': 'Tu mensaje...',
        'contact.form.send': 'Enviar mensaje',
        
        // Footer
        'footer.text': 'Diseñado y desarrollado con pasión, soñando con las estrellas.',
        'footer.copyright': '© 2025 Ángel. Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.timeline': 'Experience',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.greeting': 'Hi, I\'m',
        'hero.subtitle': 'Computer Engineer',
        'hero.description': 'Passionate about technology, cybersecurity, and developing innovative solutions.',
        'hero.viewPortfolio': 'View Portfolio',
        'hero.downloadCV': 'Download CV',
        'hero.scroll': 'Scroll',
        
        // About
        'about.tag': 'Get to know me',
        'about.title': 'About Me',
        'about.photoPlaceholder': 'Your photo here',
        'about.headline': 'Computer Engineer specialized in Information Technology',
        'about.bio': 'I am a computer engineer with a solid technical background and a great curiosity for cybersecurity and software development. I specialize in low-level programming, operating systems, and web technologies. Always seeking new challenges that allow me to grow professionally and add value through efficient and secure solutions.',
        'about.location': 'Spain',
        'about.role': 'Engineer',
        'about.status': 'Available',
        
        // Skills
        'skills.tag': 'Competencies',
        'skills.title': 'Skills',
        'skills.softSkills': 'Soft Skills',
        'skills.hardSkills': 'Hard Skills',
        'skills.teamwork': 'Teamwork',
        'skills.teamworkDesc': 'Effective collaboration in multidisciplinary environments',
        'skills.communication': 'Communication',
        'skills.communicationDesc': 'Ability to convey ideas clearly',
        'skills.problemSolving': 'Problem Solving',
        'skills.problemSolvingDesc': 'Analytical approach to complex challenges',
        'skills.continuousLearning': 'Continuous Learning',
        'skills.continuousLearningDesc': 'Constant curiosity for new technologies',
        'skills.timeManagement': 'Time Management',
        'skills.timeManagementDesc': 'Organization and meeting deadlines',
        'skills.adaptability': 'Adaptability',
        'skills.adaptabilityDesc': 'Flexibility to changes and new challenges',
        
        // Timeline
        'timeline.tag': 'My Journey',
        'timeline.title': 'Experience',
        'timeline.education': 'Academic Education',
        'timeline.certifications': 'Certifications & Courses',
        'timeline.experience': 'Experience & Projects',
        'timeline.edu1.date': '2022 - Present',
        'timeline.edu1.title': 'Computer Engineering Degree',
        'timeline.edu1.place': 'School of Computer Science (ESI)',
        'timeline.edu1.description': 'Comprehensive training in computing fundamentals, programming, networks, databases, and software development. Specialization in information technology with a practical approach to real projects.',
        'timeline.edu2.date': '2020 - 2022',
        'timeline.edu2.title': 'Scientific-Technological High School',
        'timeline.edu2.place': 'IES Torreón del Alcázar',
        'timeline.edu2.description': 'High school with scientific-technological orientation. Solid foundation in mathematics, physics, and technology that laid the groundwork for my career in computer engineering.',
        'timeline.cert1.title': 'Ethical Hacking and Cybersecurity Course',
        'timeline.exp1.title': 'E-commerce Web Solution',
        'timeline.exp1.place': 'E-commerce Project',
        'timeline.exp1.description': 'Fully functional e-commerce website solution for Iker Association',
        'timeline.exp2.title': 'RPG Video Game',
        'timeline.exp2.place': 'Multimedia Project',
        'timeline.exp2.description': 'RPG game development using RPG Maker as the main tool',
        
        // Portfolio
        'portfolio.tag': 'My Work',
        'portfolio.title': 'Portfolio',
        'portfolio.project1.title': 'E-commerce Solution',
        'portfolio.project1.description': 'Complete e-commerce web platform for Iker Association. Includes product catalog, shopping cart, payment gateway, and admin panel.',
        'portfolio.project2.title': 'Spotify Deployment with ICE',
        'portfolio.project2.description': 'Implementation and deployment of a Spotify-like distributed system using ZeroC ICE as middleware. Client-server architecture with audio streaming.',
        'portfolio.project3.title': 'Event Management',
        'portfolio.project3.description': 'Web application for comprehensive event management. Allows creating, editing, and managing events with registration system, notifications, and interactive calendar.',
        'portfolio.project4.title': 'Mobile Routes App',
        'portfolio.project4.description': 'Mobile application to explore and follow hiking and tourism routes. GPS integration, interactive maps, and points of interest system.',
        'portfolio.project5.title': 'Pokémon Game',
        'portfolio.project5.description': 'Video game inspired by the Pokémon saga with turn-based combat system, creature capture, evolutions, and map exploration.',
        'portfolio.project6.title': 'RPG Game',
        'portfolio.project6.description': 'Role-playing video game with immersive narrative, quest system, strategic combat, and character customization. Developed with RPG Maker.',
        
        // Contact
        'contact.tag': 'Let\'s Talk',
        'contact.title': 'Contact',
        'contact.description': 'Have a project in mind or just want to say hi? I\'m just a message away.',
        'contact.emailLabel': 'Email',
        'contact.locationLabel': 'Location',
        'contact.locationValue': 'Spain',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Your name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.subjectPlaceholder': 'What do you want to talk about?',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Your message...',
        'contact.form.send': 'Send message',
        
        // Footer
        'footer.text': 'Designed and developed with passion, dreaming of the stars.',
        'footer.copyright': '© 2025 Ángel. All rights reserved.'
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

function initLanguageSwitcher() {
    const langSwitcher = document.getElementById('langSwitcher');
    const langFlag = document.getElementById('langFlag');
    const langCode = document.getElementById('langCode');
    
    if (!langSwitcher) return;
    
    // Apply saved language on load
    applyLanguage(currentLang);
    updateLangButton(langFlag, langCode, currentLang);
    
    langSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
        updateLangButton(langFlag, langCode, currentLang);
    });
}

function updateLangButton(flagEl, codeEl, lang) {
    if (lang === 'es') {
        flagEl.textContent = '🇪🇸';
        codeEl.textContent = 'ES';
    } else {
        flagEl.textContent = '🇬🇧';
        codeEl.textContent = 'EN';
    }
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Handle placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Initialize language switcher on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
});
