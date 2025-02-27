const mobileBtn = document.getElementById("menu-btn");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const mobileMenu = document.getElementById("mobile-menu");


mobileBtn.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
});