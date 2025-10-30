

let date = new Date();
let currentYear = document.getElementById('currentYear');
let lastModified = document.getElementById('lastModified')
let certificatesDiv = document.querySelector('.certificatesShowCase');
let categoryBtn = document.querySelectorAll('.certificateList button');

currentYear.textContent = `${date.getFullYear()}`;
lastModified.textContent = `Last Modified: ${date.getHours()}:${date.getMinutes()} ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;


const certificateArray = [
    ['CSE 111', true],
    ['CSE 210', true],
    ['CSEPC 110', true],
    ['WDD 130', true],
    ['WDD 131', true],
    ['WDD 231', false],
];


categoryBtn.forEach(btn => {
  btn.addEventListener('click', () => {

   
    categoryBtn.forEach(b => b.classList.remove('active'));
    
    btn.classList.add('active');


    const category = btn.classList[0].toUpperCase();

 
    let filteredArray;
    if (category === 'ALL') {
      filteredArray = certificateArray;
    } else {
      filteredArray = certificateArray.filter(([course, status]) => course.startsWith(category));
    }

    populateCertificates(filteredArray);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  populateCertificates(certificateArray);
});


const populateCertificates = (category) => {

    certificatesDiv.innerHTML = "";

    
    category.forEach(([course, status]) => {

        let div = document.createElement('div');
        let p = document.createElement('p');

        if (status){
            p.textContent = `✅ ${course}`
            div.classList.add('achieve')
        }
        else{
            p.textContent = course;
        }
        
        div.classList.add('cert-block');

        

        p.classList.add('cert-title')
        div.appendChild(p)

        certificatesDiv.appendChild(div);

    })
}