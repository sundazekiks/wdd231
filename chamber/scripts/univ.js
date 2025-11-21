const hamMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.navigation')

hamMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
})
