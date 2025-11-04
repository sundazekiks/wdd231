

const cards = document.querySelector('.cards');

const fetchData = async () => {
    const response = await fetch('../data/companies.json')
    const data = await response.json()
    console.log(data)

}
fetchData()