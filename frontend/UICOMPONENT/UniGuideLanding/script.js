
document.addEventListener('mousemove', (e) => {
    // Spotlight effect
    const spotlight = document.getElementById('spotlight');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);

    // Hero Visual Tilt Effect
    const heroVisual = document.getElementById('hero-visual');
    if (heroVisual) {
        const rect = heroVisual.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
        const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);
        
        const rotateY = deltaX * 10; // Max 10 degrees
        const rotateX = -deltaY * 10; // Max 10 degrees
        
        heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }
});

// Reset tilt when mouse leaves
document.addEventListener('mouseleave', () => {
    const heroVisual = document.getElementById('hero-visual');
    if (heroVisual) {
        heroVisual.style.transform = `perspective(1000px) rotateX(5deg) rotateY(0deg) scale(1)`;
    }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Update icon
    if (newTheme === 'light') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
    
    // Add a little pop animation to the toggle
    themeToggle.style.transform = 'scale(1.2)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 200);
});

// Scroll Reveal Animation (Simple version)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.bento-item, .section-header').forEach(el => {
    observer.observe(el);
});
