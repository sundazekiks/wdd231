
const companySection = document.querySelector('.listed-companies')
const hamMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.navigation')


hamMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
})


const fetchListData = async () => {
    const response = await fetch('https://raw.githubusercontent.com/sundazekiks/wdd231/refs/heads/main/chamber/data/companieswithEvents.json')

    const data = await response.json();

    console.log(data)
    companyCards(data)
}

document.getElementById('list').addEventListener('click', () => {
    companySection.classList.add('list');
})

document.getElementById('grid').addEventListener('click', () => {
    companySection.classList.remove('list');
})



const companyCards = (companies) => {
    companies.forEach(company => {
        const div = document.createElement('div')
        const companyName = document.createElement('h2');
        const location = document.createElement('p');
        const phone = document.createElement('p');

        companyName.textContent = company.name;
        location.textContent = company.address;
        phone.textContent = company.phone;

        div.appendChild(companyName);
        div.classList.add('card')
        div.appendChild(location);
        div.appendChild(phone);

        companySection.appendChild(div);

    })
}


fetchListData();