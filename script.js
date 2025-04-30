// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
