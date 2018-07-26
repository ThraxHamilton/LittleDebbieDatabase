console.log('yeah')
// Make Database. (you knew that)
// const cakeDatabase = {}
// Create empty arrays for database. (you knew that too)
// cakeDatabase.zebra = []
// cakeDatabase.swiss = []

// Lastly, create a function to encapsulate EVERYTHING after everything else is written.
function populateDB() {

// Easier function to create for objects.
// Keys inside of argument. Not blank ().
let moreCakes = []
const createSnackCake = (name, maker, count, description) => {
    const snackCake = {
        name: name,
        maker: maker,
        count: count,
        description: description
    }
    

    moreCakes.push(snackCake)
    const stringified = JSON.stringify(moreCakes)
    localStorage.setItem('cakes', stringified)
}
createSnackCake('Zebra Cakes', 'Little Debbie', '10/bx', 'Cream filled snack cakes with white icing and chocolate stripes');

createSnackCake('Swiss Cake Rolls','Little Debbie','12/bx','Chocolate cake rolled around a layer of creme filling and drenched with fudge coating. Available twin-wrapped in a 12-count carton');

createSnackCake('Honey Bunz', 'Little Debbie', '6/bx', 'Delicious snack. Microwave for 8-10 seconds');


// Objects
// const zebraCakes = {
//     name: 'Zebra Cakes',
//     maker: 'Little Debbie',
//     count: '10/bx',
//     description: 'Cream filled snack cakes with white icing and chocolate stripes'
// }

// const swissRolls = {
//     name:'Swiss Cake Rolls',
//     maker:'Little Debbie',
//     count:'12/bx',
//     description: 'Chocolate cake rolled around a layer of creme filling and drenched with fudge coating. Available twin-wrapped in a 12-count carton'

// }
// Push
// cakeDatabase.zebra.push(zebraCakes)
// cakeDatabase.swiss.push(swissRolls)
// Turn objects into a string
// Set items with keys. Stringify
}








// const stringified = JSON.stringify(swissRolls)
// localStorage.setItem('swissRolls', stringified)



// const saveDatabase = function (databaseObject, localStorageKey) {
//     /*
//         Convert the Object into a string.
//     */
//     const stringifiedDatabase = JSON.stringify(databaseObject)

//     /*
//         Create a key in local storage, and store the string
//         version of your inventory database as the value
//     */
//     localStorage.setItem(localStorageKey, stringifiedDatabase)
// }

// saveDatabase(cakeDatabase, 'Cakes')
// const homeStorage = JSON.parse(localStorage.getItem("Cakes"))