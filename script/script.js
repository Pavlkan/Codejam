const menuButton = document.querySelector(".column__middle-line_left");
const puzzleContainer = document.querySelector(".puzzle__container");

menuButton.addEventListener("click", (e) => {
    puzzleContainer.classList.toggle("_menuActive");
});

// ---------------------------------------------------------------------------

let puzzle = document.querySelector(".puzzle__grid-container");

puzzle.addEventListener('click', (e) => {

})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}



