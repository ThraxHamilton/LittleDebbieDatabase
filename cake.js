console.log('yeah')
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
}