const qString = window.location.search

const urlParams = new URLSearchParams(qString);

const fullName = urlParams.get('fullname');
const email = urlParams.get('email');
const company = urlParams.get('company-name');

document.getElementById('username').textContent = fullName;
document.getElementById('email').textContent = email;
