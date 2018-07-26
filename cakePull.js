


// Easier function to create for objects.
// Keys inside of argument. Not blank ().
// const createSnackCake = (name, maker, count, description) => {
//     const snackCake = zebraCakes = {
//         name: name,
//         maker: maker,
//         count: count,
//         description: description
//     }
    

//     return snackCake
// }
// Const makes variable unchangeable. Let 'lets' you change them. 
// Put values from keys inside function argument, instead of blank ().
// let newCakes = createSnackCake('Zebra Cakes', 'Little Debbie', '10/bx', 'Cream filled snack cakes with white icing and chocolate stripes');


// Create new variable. ID or QuerySelector, it doesn't really matter.
const populateButton = document.getElementById("morning");
// Populate button with event listener. Function "populateDB" is inside main.js.
populateButton.addEventListener('click', populateDB)
