import { places } from "../data/homeTownData.mjs";

const gridHolder = document.querySelector(".grid-holder");
const modifier = document.getElementById("modifier");
const scripts = {
    lastVisited: function(){
        return localStorage.getItem("timeLastVisited")
    },
    firstTime : "Welcome! Let us know if you have any questions",
    backSoSoon: "Back so soon! Awesome!",
    nDays: function(){
        const lastTime = Number(this.lastVisited());
        const currentTime = Date.now();

        const daysAgo = currentTime - lastTime;


        const day = 1000 * 60 * 60 * 24;
        const minutes = 1000 * 60;

        const convert = Math.floor(daysAgo / day);

        return [`You visited last ${convert} days ago`, convert]
    },

}



window.addEventListener("DOMContentLoaded", async () => {
    const storedLastTime = localStorage.getItem("timeLastVisited")
    const hasVisited = Boolean(storedLastTime);
    let checkered;

    if (!hasVisited){
        console.log("First Time")
        modifier.textContent = scripts.firstTime;
        localStorage.setItem("timeLastVisited", Date.now());
    }

    if(hasVisited){
        checkered = scripts.nDays();
        if(checkered[1] < 1 ){
       
        modifier.textContent = scripts.backSoSoon;
        localStorage.setItem("timeLastVisited", Date.now());
        }
        else{
            console.log(checker[0])
            localStorage.setItem("timeLastVisited", Date.now());
            modifier.textContent = checker[0];
        }
    }


    

    generatedDataCard(places)
})


const generatedDataCard = (data) => {
    data.forEach(item => {
        const card = document.createElement('div')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const address = document.createElement('h3')
        const p = document.createElement('p')

        card.classList.add('placeCard');
        img.src = item.imgUrl;
        img.alt = "Image Link for the place card"

        h2.textContent = item.name;
        address.textContent = item.address;

        p.textContent = item.description;
        
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(p);


        gridHolder.appendChild(card);
    })
}


 




