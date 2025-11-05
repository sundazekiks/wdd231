

const cards = document.querySelector('.cards');
const list = document.querySelector('.listView');
const showNumberOfMembers = document.getElementById('numberOfMembers')
const gridView = document.querySelector('.grid');
const listView = document.querySelector('.list');
const menu = document.getElementById('hamburger');
const navBar = document.querySelector('.navigation')


const fetchData = async () => {
    try{
        const response = await fetch('https://raw.githubusercontent.com/sundazekiks/wdd231/refs/heads/main/chamber/data/companies.json')
        const data = await response.json()
        return data;
    }catch(error){
         console.error(error);
        return [];
    }
    
}

menu.addEventListener('click', () => {
    navBar.classList.toggle('active');
})

// Printing the cards

const generateCard = (companies) => {
    cards.innerHTML = '';
    showNumberOfMembers.textContent = `Showing ${companies.length} companies`;
    console.log(companies.length);
    companies.forEach((company) => {
        
        const section = document.createElement('section')
        const img = document.createElement('img')
        const h1 = document.createElement('h1')
        const div = document.createElement('div')
        const address = document.createElement('p')
        const phone = document.createElement('p')
        // const website = document.createElement('p')
        // const button = document.createElement('button')

        img.src = company.imageurl;
        img.alt = "Company Logo"
        img.loading = "lazy";

        h1.textContent = company.name;

        address.textContent = company.address;
        phone.textContent = company.phone;
        // website.textContent = company.website;
        div.classList.add('contact');
        div.appendChild(address);
        div.appendChild(phone);
        // div.appendChild(website);


        section.appendChild(img);
        section.appendChild(h1)
        section.appendChild(div)

        cards.appendChild(section)
    });
}


const generateList = (companies) => {
    list.innerHTML = '';
    companies.forEach((company) => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        div.classList.add('list-item');
        p.textContent = company.name;
        p2.textContent= company.address;
        p3.textContent = company.website;

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        list.appendChild(div);
    })
}





document.addEventListener('DOMContentLoaded', async () => {
    const getData = await fetchData();
    generateCard(getData);
})


gridView.addEventListener('click', async () => {
    const getData = await fetchData();
    list.innerHTML = '';
    generateCard(getData);
})

listView.addEventListener('click', async () => {
    const getData = await fetchData();
    cards.innerHTML = '';
    generateList(getData);
})

