const params = new URLSearchParams(window.location.search);
const name = document.getElementById('name');
const info = document.querySelector('.info');
const urlArray = params.toString().split('&')

console.log(urlArray);
name.textContent = `${params.get('firstName')} ${params.get('lastName')}`

window.addEventListener('DOMContentLoaded', () => {
    urlArray.slice(0,4).forEach(line => {

        const parts = line.split('=')
        const div = document.createElement('div');
        const variable = document.createElement('p');
        const value = document.createElement('p');

        variable.textContent = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        value.textContent = parts[1].includes("%40") ? decodeURIComponent(parts[1]) : parts[1] ;

        div.appendChild(variable);
        div.appendChild(value);
        div.classList.add('detail');
        info.appendChild(div);
    })
})