const submitBtn = document.getElementById('submitBtn');
const timeStamp = document.getElementById('timestamp')
const date = new Date();
const modals = document.querySelectorAll('dialog');
const aLinks = document.querySelectorAll('.learnMore')


aLinks.forEach((a, index) => {
    a.addEventListener('click', () => {
        modals[index].showModal();
    })
})

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.np').classList.add('animate');
  document.querySelector('.bronze').classList.add('animate');
  document.querySelector('.silver').classList.add('animate');
  document.querySelector('.gold').classList.add('animate');
});



submitBtn.addEventListener('click', () => {

    timeStamp.value = `${date.toISOString()}`
    console.log(date.toISOString())

})