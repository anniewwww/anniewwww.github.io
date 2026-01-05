// Theme Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeIcon.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; 
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Initial Load Persistence
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }
};