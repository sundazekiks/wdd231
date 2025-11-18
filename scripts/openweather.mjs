import { capitalize } from "./usefulFunctions.mjs";

const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'b95117922e8e3b7c64543327fbb227b7';
const lat = 49.74;
const lon = 6.63;
const units = 'imperial';


const apiFetch = async () => {
    try{

        const response = await fetch(`${apiUrl}weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const data = await response.json();
        console.log(data);
        displayResults(data);

    }catch (error) {
        console.log(error);
    }
}

const displayResults = (data) => {
    currentTemp.textContent = data.main.temp;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.alt = data.weather[0].description;
    let capitalizedDescription = capitalize(data.weather[0].description);
    captionDesc.textContent = capitalizedDescription;
}

apiFetch();