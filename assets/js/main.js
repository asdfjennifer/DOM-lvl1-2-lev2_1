//lev2_1: DOM Elements
// In dieser Übung werden wir DOM Elements kennenlernen.
// Schreibe eine Funktion, die beim Anklicken des “Change me” Buttons den Home Button ändert.
// Der Code befindet sich im Kommentar.
// Nutze:
// onclick
// getElementById
let homeButton = document.getElementById("navHome");

console.log("so");

function changeHomeButton() {
    //if clicked 
    console.log("I AM STUPID");
    homeButton.innerHTML = "emoH";
    homeButton.style.backgroundColor = "pink";
    homeButton.style.color = "grey";
    homeButton.style.fontFamily = "Helvetica";
}

//DOM lvl1-2-lev2_1