const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'

const cards = document.getElementById('cards')

const getProphetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    displayProphet(data.prophets);
}

getProphetData();

const displayProphet = async (prophets) => {
    prophets.forEach((prophet) => {
        const sectionCard = document.createElement('section')
        const fullName = document.createElement('h2')
        const portrait = document.createElement('img')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')


        // Portrait Details
        portrait.src = prophet.imageurl;
        portrait.alt = `The Prophet ${prophet.name}`;
        portrait.loading = 'lazy';
        portrait.setAttribute('width', '250');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`
        p1.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`
        sectionCard.appendChild(fullName);
        sectionCard.appendChild(p1)
        sectionCard.appendChild(p2)
        sectionCard.appendChild(portrait)
        

        // Append the section to the cards element

        cards.appendChild(sectionCard);


        // console.log(prophet.imageurl)


    });
}

