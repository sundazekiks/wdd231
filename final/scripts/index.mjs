import { data } from "./getData.mjs";
import { cardGenerator } from "./cardGenerator.mjs";

const featureContainer = document.querySelector('.wrapper');
const testimonialContainer = document.querySelector('.testimonials');

(async ()=> {
    const getData = await data();

    getData.features.forEach(item => {
        console.log(item)
    })

    // for Core Features
    cardGenerator(getData, featureContainer, true)
    // for Testimonials
    cardGenerator(getData, testimonialContainer, false, true)
})();

