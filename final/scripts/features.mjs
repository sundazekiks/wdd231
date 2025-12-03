import { data } from "./getData.mjs";


(async ()=> {
    const getData = await data();

    getData.features.forEach(item => {
        console.log(item)
    })

    cardGenerator(getData.features)

})();

const container = document.querySelector('.feature');

const iconsObj = {
    "lead-icon": "📋",
    "automation-icon": "⚙️",
    "analytics-icon": "📊",
    "team-icon": "👥",
    "pipeline-icon": "🔄",
    "email-icon": "✉️",
    "activity-icon": "📌",
    "custom-icon": "🛠️",
    "security-icon": "🔒",
    "mobile-icon": "📱",
    "notification-icon": "🔔",
    "integration-icon": "🔗"
};


function cardGenerator(featuresData) {
    featuresData.forEach(item => {

        const div = document.createElement('div');
        const placeHolder = document.createElement('div');
        const a = document.createElement('a');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        
        div.classList.add('card', 'feature-card');
        placeHolder.classList.add('pl', 'feature-placeholder');
        a.classList.add('feature-icon');
        h1.classList.add('feature-title');
        p.classList.add('feature-description');

        
        a.innerHTML = iconsObj[item.icon] || "❓";
        h1.textContent = item.title;
        p.textContent = item.description;

        
        placeHolder.appendChild(a);
        placeHolder.appendChild(h1);
        div.appendChild(placeHolder);
        div.appendChild(p);

        
        div.addEventListener('click', () => {
            console.log(item.title);
        });

        
        container.appendChild(div);
    });
}





