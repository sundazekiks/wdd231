
const modeBtn = document.getElementById('mode');


let isDarkMode = Boolean(localStorage.getItem('dark-mode')) || false;
const colorArray = ["#000", "#fff"];
const currentYear = document.getElementById('currentYear');
const h1 = document.querySelector('h1');
const allH2 = document.querySelectorAll("h2")
const allH3 = document.querySelectorAll("h3")
const allp = document.querySelectorAll("p")
const alla = document.querySelectorAll("a")
const body = document.querySelector('body')
const modeMoon = document.querySelector('.fa-moon')

let date = new Date();
const menu = document.getElementById('hamburg');
const nav = document.querySelector('.navigation')

menu.addEventListener('click', ()=>{
    nav.classList.toggle("active")
})


currentYear.textContent = date.getFullYear();

modeBtn.addEventListener('click', () => {
    if(isDarkMode){
        isDarkMode = false;
        modeMoon.style.color = colorArray[0];
        modeBtn.style.background = colorArray[1];
        h1.classList.add('dark-mode')
        allH2.forEach((item) => item.classList.add('dark-mode'))
        allH3.forEach((item) => item.classList.add('dark-mode'))
        allp.forEach((item) => item.classList.add('dark-mode'))
        alla.forEach((item) => item.classList.add('dark-mode'))
        body.classList.add("active");
        localStorage.setItem('dark-mode', true)
    }
    else{
        isDarkMode = true;
        modeMoon.style.color = colorArray[1];
        modeBtn.style.background = colorArray[0];
        h1.classList.remove('dark-mode')
        allH2.forEach((item) => item.classList.remove('dark-mode'))
        allH3.forEach((item) => item.classList.remove('dark-mode'))
        allp.forEach((item) => item.classList.remove('dark-mode'))
        alla.forEach((item) => item.classList.remove('dark-mode'))
        body.classList.remove("active");
        localStorage.setItem('dark-mode', false)
    }
})