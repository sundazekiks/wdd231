

const companyEvents = document.querySelector('.company-events');
const weather = document.querySelector('.weather');
const h = document.querySelector('.h');
const w = document.querySelector('.w');
const companies = document.querySelector('.spotlight-companies')

const dataUrl = 'https://raw.githubusercontent.com/sundazekiks/wdd231/refs/heads/main/chamber/data/companieswithEvents.json';

console.log(h);
const lat = 8.48;
const lon = 123.79;
const apiKey = 'b95117922e8e3b7c64543327fbb227b7';

const fetchweatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)

    const data = await response.json();
    console.log(data);
    weatherCardDetails(data);
}

fetchweatherData();

const weatherCardDetails = (data) => {
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');

    const humidity = document.createElement('p');
    const windSpeed = document.createElement('p')

    img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    img.alt = "Weather Icon";

    h4.textContent = `${Math.round(data.main.temp)}°C`
    h5.textContent = `${data.name}, ${data.sys.country}`

    humidity.textContent = `${data.main.humidity}`;
    windSpeed.textContent = `${data.wind.speed}`;

    weather.appendChild(img);
    weather.appendChild(h4);
    weather.appendChild(h5);
    h.appendChild(humidity);
    w.appendChild(windSpeed);
}

const fetchData = async() => {
    const response = await fetch(dataUrl);
    const data = await response.json();
    console.log(data)
    eventCardMaker(data);
    spotlightedCompanies(data);
}

const eventCardMaker = async (companyDetails) => {

   companyDetails.forEach(company => {
    // Card
    const div = document.createElement('div');
    // Event Title
    const h3 = document.createElement('h3');
    // Short Description
    const p = document.createElement('p');
    // Date
    const date = document.createElement('p')
    // Learn More button
    const learnMore = document.createElement('p')

    h3.textContent = company.events.name;
    p.textContent = company.events.purpose;
    date.textContent = company.events.date;
    learnMore.textContent = 'Learn More';

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(date);
    div.appendChild(learnMore);

    div.classList.add('event-card')

    companyEvents.appendChild(div);

   });
}




const spotlightedCompanies = (company) => {
    const highlightedCompanies = company.filter(comp => comp.membership === 1);
    highlightedCompanies.forEach(entity => {
        const compCard = document.createElement('div');
        const h3 = document.createElement('h3')
        const location = document.createElement('p')
        location.classList.add('location')
        const phone = document.createElement('p')

        h3.textContent = `${entity.name}`
        location.textContent = `${entity.address}`
        phone.textContent = `${entity.phone}`

        compCard.classList.add('compCard');

        compCard.appendChild(h3);
        compCard.appendChild(location);
        compCard.appendChild(phone);
        
        companies.appendChild(compCard);
    })
}

fetchData();
