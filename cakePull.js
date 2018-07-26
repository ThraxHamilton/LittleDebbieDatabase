// Create new variable. ID or QuerySelector, it doesn't really matter.
const populateButton = document.getElementById("morning");
// Populate button with event listener. Function "populateDB" is inside main.js.
populateButton.addEventListener('click', populateDB)
