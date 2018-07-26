console.log('go')

let carList = []

const createCarList = (model, make, year) => {
    const car = {
        model: model,
        make: make,
        year: year
    }
    carList.push(car)
}
createCarList ('Impala', 'Chevorlet', '1964')
createCarList ('Impala', 'Chevorlet', '1996')

function carDB () {
    const stringified = JSON.stringify(carList)
    localStorage.setItem('cars', stringified)
}
console.log(carList)