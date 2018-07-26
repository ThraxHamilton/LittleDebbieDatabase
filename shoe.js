console.log('cant stay away')

function populateShoeDB() {
let shoeStuff = []
const createShoe = (name, manufacture, year) => {
    const shoes = {
        name: name,
        manufacture: manufacture,
        year: year,
    }
    shoeStuff.push(shoes)

    const stringified = JSON.stringify(shoeStuff)
    localStorage.setItem('shoes', stringified)
}
createShoe = ('Chucka Boot', 'Vans', '2012')
createShoe = ('Jordan XI Concord', 'Nike, Jordan', '1996')
}