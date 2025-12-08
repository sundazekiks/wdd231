
export const cardGenerator = (data, elementWrapper, isSliced=false, isTestimonials=false) => {

    if (isSliced){
    const optimal_data = isSliced ? data.features.slice(0, 3) : data.features;

    const iconsObj = {
        "lead-icon" : "<i class='fa-solid fa-people-roof'></i>",
        "automation-icon" : "<i class='fa-solid fa-bolt'></i>",
        "analytics-icon" : "<i class='fa-solid fa-chart-area'></i>"

    }

    optimal_data.forEach(item => {
        const div = document.createElement('div')
        const placeHolder = document.createElement('div')
        const a = document.createElement('a');
        const h1 = document.createElement('h2')
        const h2 = document.createElement('h3')
        const p = document.createElement('p')

        div.classList.add('card')
        a.innerHTML = iconsObj[item.icon]
        h1.textContent  = item.title;
        p.textContent = item.description
        
        placeHolder.classList.add("pl")
        placeHolder.appendChild(a)
        placeHolder.appendChild(h1)

        div.appendChild(placeHolder);
        div.addEventListener('click', ()=>{
            console.log(item.title)
        })

        elementWrapper.appendChild(div);
    });
    }
    else if(isTestimonials) {
        console.log("Here")
        const testimonialsArray = data.testimonials;

        testimonialsArray.forEach(item => {
            const card = document.createElement('div');
            const quote = document.createElement('p');
            const name = document.createElement('h3');
            const company = document.createElement('p');

            card.classList.add('testimonial-card');
            quote.textContent = item.quote;
            name.textContent = item.name;
            company.textContent = item.company;

            card.appendChild(quote);
            card.appendChild(name);
            card.appendChild(company);

            elementWrapper.appendChild(card)
        })
    }

    
} 