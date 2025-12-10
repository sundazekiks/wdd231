import { data } from "./getData.mjs";
import { cardGenerator } from "./cardGenerator.mjs";


const featureContainer = document.querySelector('.wrapper');
const testimonialContainer = document.querySelector('.testimonials');

(async ()=> {
    const getData = await data();

    // for Core Features
    cardGenerator(getData, featureContainer, true)
    // for Testimonials
    cardGenerator(getData, testimonialContainer, false, true)
})();

