console.log('cant stay away')

// Empty array
let shoeList = []
// Create  const function to hold info from objects
const createShoeList = (name, brand, year) => {
    // Create const with object
    const shoe = {
        name: name,
        brand: brand,
        year: year
    }
    // Push 
    shoeList.push(shoe)
}
createShoeList('Chucka Boot', 'Vans', '2012');
createShoeList('Concord XI', 'Jordan', '1996');

// Initial function with empty argument
function setDB() {
//    Stringify array
   const stringified = JSON.stringify(shoeList)
//    Put Into local storage
    localStorage.setItem('shoes',stringified)
 }
