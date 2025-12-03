


const currentYear = document.getElementById('currentYear');
let date = new Date();
const menu = document.getElementById('hamburg');
const nav = document.querySelector('.navigation')

menu.addEventListener('click', ()=>{
    nav.classList.toggle("active")
})






currentYear.textContent = date.getFullYear();