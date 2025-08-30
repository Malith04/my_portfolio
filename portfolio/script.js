// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll - keep dark theme
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you! Your message has been sent successfully.', 'success');
    this.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced typing animation for hero section
function typeWriter() {
    const texts = [
        "Software Engineer",
        "Full-Stack Developer", 
        "Problem Solver",
        "Cricket Player",
        "Tech Innovator"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 70;
    const pauseTime = 2000;
    
    const typingElement = document.getElementById('typingText');
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing after page load
    setTimeout(type, 1500);
}

// Enhanced counter animation function
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target === 100 ? target + '%' : target + '+';
            }
        };
        
        updateCounter();
    });
}

// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 3000);
        }
    });
}

// Orbit animation enhancement
function enhanceOrbitAnimations() {
    const orbitItems = document.querySelectorAll('.orbit-item');
    
    orbitItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Pause orbit rotation on hover
            const orbit = item.closest('.orbit');
            orbit.style.animationPlayState = 'paused';
        });
        
        item.addEventListener('mouseleave', () => {
            // Resume orbit rotation
            const orbit = item.closest('.orbit');
            orbit.style.animationPlayState = 'running';
        });
    });
}

// Particle system enhancement
function createParticles() {
    const aboutSection = document.querySelector('.about');
    const particlesContainer = document.querySelector('.about-particles');
    
    if (!particlesContainer) return;
    
    // Add more dynamic particles
    for (let i = 7; i <= 12; i++) {
        const particle = document.createElement('div');
        particle.className = `particle particle-${i}`;
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize About Me animations
function initAboutAnimations() {
    // Create additional particles
    createParticles();
    
    // Enhance orbit interactions
    enhanceOrbitAnimations();
    
    // Animate progress bars
    animateProgressBars();
    
    // Intersection Observer for animations
    const aboutSection = document.querySelector('.about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger counter animations
                setTimeout(() => {
                    animateCounters();
                }, 200);
                
                // Add visible class for additional animations
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.6 });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    // Initialize About Me animations
    initAboutAnimations();
    
    // Start counter animation after hero stats become visible
    setTimeout(() => {
        animateCounters();
    }, 2000); // Start after hero stats animation
    
    // Fix chatbot elements after DOM is loaded
    setTimeout(() => {
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatbotInput = document.getElementById('chatbotInput');
        const chatbotSend = document.getElementById('chatbotSend');
        const chatbotMessages = document.getElementById('chatbotMessages');
        
        if (chatbotClose) {
            chatbotClose.addEventListener('click', closeChatbot);
        }
        
        if (chatbotSend) {
            chatbotSend.addEventListener('click', sendMessage);
        }
        
        if (chatbotInput) {
            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }
    }, 100);
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Skill items hover effect
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(45deg, #2563eb, #3b82f6)';
            this.style.color = 'white';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'white';
            this.style.color = 'var(--text-primary)';
        });
    });
});

// Project cards tilt effect
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});

// Parallax effect removed to fix About section overlap issue

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Initialize counter animations when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const targetValue = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetValue);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => statsObserver.observe(stat));
});

// Unified Action Button Functionality
const actionToggle = document.getElementById('actionToggle');
const actionMenu = document.getElementById('actionMenu');
const themeAction = document.getElementById('themeAction');
const chatbotAction = document.getElementById('chatbotAction');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const root = document.documentElement;

let actionMenuOpen = false;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    root.classList.add('light-theme');
    themeIcon.className = 'fas fa-moon';
}

// Action menu toggle
actionToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    actionMenuOpen = !actionMenuOpen;
    actionMenu.classList.toggle('open', actionMenuOpen);
});

// Theme toggle action
themeAction.addEventListener('click', () => {
    const isLight = body.classList.contains('light-theme');
    
    if (isLight) {
        // Switch to dark theme
        body.classList.remove('light-theme');
        root.classList.remove('light-theme');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light theme
        body.classList.add('light-theme');
        root.classList.add('light-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
    
    // Close action menu
    actionMenuOpen = false;
    actionMenu.classList.remove('open');
});

// Chatbot action
chatbotAction.addEventListener('click', () => {
    openChatbot();
    // Close action menu
    actionMenuOpen = false;
    actionMenu.classList.remove('open');
});

// Close action menu when clicking outside
document.addEventListener('click', (e) => {
    if (actionMenuOpen && !actionToggle.contains(e.target) && !actionMenu.contains(e.target)) {
        actionMenuOpen = false;
        actionMenu.classList.remove('open');
    }
});

// Chatbot Functionality
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

let chatbotOpen = false;

// Chatbot responses database
const chatbotResponses = {
    greetings: [
        "Hello! I'm here to help you learn more about Malith. What would you like to know?",
        "Hi there! Feel free to ask me about Malith's skills, projects, or experience!",
        "Welcome! I'm Malith's AI assistant. How can I help you today?"
    ],
    skills: [
        "Malith is proficient in JavaScript, HTML5, CSS3, Python, Java, React, and Node.js. He's also skilled in tools like Git, VS Code, Figma, and Photoshop!",
        "His technical skills include modern web development frameworks and languages. He's also great at sports like Cricket and Chess, showing his strategic thinking abilities!",
        "Malith combines technical programming skills with soft skills like leadership, communication, and problem-solving. A well-rounded developer!"
    ],
    projects: [
        "Malith has worked on several exciting projects including this portfolio website, an interactive calculator, a chess game application, and a sports statistics tracker!",
        "His projects showcase his full-stack development skills, from frontend design to backend functionality. Each project demonstrates his creativity and technical expertise!",
        "You can see his featured projects in the portfolio above. They range from web applications to game development, showing his versatility!"
    ],
    education: [
        "Malith is currently an undergraduate student at the National Institute of Business Management (NIBM), pursuing his dream of becoming a Software Engineer!",
        "He's committed to continuous learning and has completed various courses including English proficiency and web development certifications.",
        "His educational journey combines formal studies with self-directed learning, always staying updated with the latest technologies!"
    ],
    experience: [
        "Malith has gained experience through academic projects, self-learning, and practical application of his skills in real-world scenarios.",
        "His experience includes web development, sports achievements, and leadership roles that have shaped his problem-solving abilities.",
        "He's passionate about creating digital solutions and has hands-on experience with modern development tools and frameworks!"
    ],
    contact: [
        "You can reach Malith at thegr8malith@gmail.com or call him at 0767421844. He's also active on LinkedIn and GitHub!",
        "Feel free to connect with Malith through the contact form above or reach out directly via email. He'd love to hear from you!",
        "Malith is always open to new opportunities and collaborations. Don't hesitate to get in touch!"
    ],
    default: [
        "That's an interesting question! You can learn more about Malith by exploring his portfolio sections above.",
        "I'd be happy to tell you more about Malith's skills, projects, education, or experience. What interests you most?",
        "Feel free to ask me about any aspect of Malith's background - his technical skills, projects, education, or how to contact him!"
    ]
};

function openChatbot() {
    chatbotWindow.classList.add('open');
    chatbotOpen = true;
    chatbotInput.focus();
}

function closeChatbot() {
    chatbotWindow.classList.remove('open');
    chatbotOpen = false;
}

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return typingDiv;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return getRandomResponse('greetings');
    } else if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
        return getRandomResponse('skills');
    } else if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
        return getRandomResponse('projects');
    } else if (message.includes('education') || message.includes('study') || message.includes('university') || message.includes('nibm')) {
        return getRandomResponse('education');
    } else if (message.includes('experience') || message.includes('background') || message.includes('career')) {
        return getRandomResponse('experience');
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
        return getRandomResponse('contact');
    } else {
        return getRandomResponse('default');
    }
}

function getRandomResponse(category) {
    const responses = chatbotResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, true);
    chatbotInput.value = '';
    
    // Show typing indicator
    const typingIndicator = showTypingIndicator();
    
    // Simulate bot thinking time
    setTimeout(() => {
        typingIndicator.remove();
        const botResponse = getBotResponse(message);
        addMessage(botResponse);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Event listeners are now handled in DOMContentLoaded

// Close chatbot when clicking outside (updated for action button)
document.addEventListener('click', (e) => {
    if (chatbotOpen && !chatbotWindow.contains(e.target) && !actionToggle.contains(e.target) && !actionMenu.contains(e.target)) {
        closeChatbot();
    }
});

// Preloader
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .preloader-content {
            text-align: center;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(preloader);
    
    // Hide preloader when page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.remove(), 500);
        }, 1000);
    });
}

// Initialize preloader
createPreloader();

// Animated Star Constellation Background
class StarField {
    constructor() {
        this.canvas = document.getElementById('starCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.connections = [];
        this.mouse = { x: 0, y: 0 };
        
        this.resize();
        this.createStars();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createStars() {
        const numStars = Math.floor((this.canvas.width * this.canvas.height) / 8000);
        this.stars = [];
        
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                twinkle: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    updateStars() {
        this.stars.forEach(star => {
            // Move stars
            star.x += star.vx;
            star.y += star.vy;
            
            // Wrap around edges
            if (star.x < 0) star.x = this.canvas.width;
            if (star.x > this.canvas.width) star.x = 0;
            if (star.y < 0) star.y = this.canvas.height;
            if (star.y > this.canvas.height) star.y = 0;
            
            // Twinkling effect
            star.opacity += Math.sin(Date.now() * star.twinkle) * 0.01;
            star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        });
    }
    
    drawStars() {
        this.stars.forEach(star => {
            this.ctx.save();
            this.ctx.globalAlpha = star.opacity;
            
            // Create gradient for star glow
            const gradient = this.ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.size * 3
            );
            gradient.addColorStop(0, '#00d4ff');
            gradient.addColorStop(0.5, '#ffffff');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw star core
            this.ctx.fillStyle = '#ffffff';
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }
    
    drawConnections() {
        const maxDistance = 150;
        const mouseDistance = 200;
        
        // Connect nearby stars
        for (let i = 0; i < this.stars.length; i++) {
            for (let j = i + 1; j < this.stars.length; j++) {
                const dx = this.stars[i].x - this.stars[j].x;
                const dy = this.stars[i].y - this.stars[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.3;
                    
                    this.ctx.save();
                    this.ctx.globalAlpha = opacity;
                    this.ctx.strokeStyle = '#00d4ff';
                    this.ctx.lineWidth = 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.stars[i].x, this.stars[i].y);
                    this.ctx.lineTo(this.stars[j].x, this.stars[j].y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
            
            // Connect stars to mouse
            const mouseDx = this.stars[i].x - this.mouse.x;
            const mouseDy = this.stars[i].y - this.mouse.y;
            const mouseDistanceCalc = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
            
            if (mouseDistanceCalc < mouseDistance) {
                const opacity = (1 - mouseDistanceCalc / mouseDistance) * 0.6;
                
                this.ctx.save();
                this.ctx.globalAlpha = opacity;
                this.ctx.strokeStyle = '#c21b1b';
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(this.stars[i].x, this.stars[i].y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
                this.ctx.restore();
            }
        }
    }
    
    animate() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateStars();
        this.drawConnections();
        this.drawStars();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize star field when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for canvas to be ready
    setTimeout(() => {
        new StarField();
    }, 100);
});
