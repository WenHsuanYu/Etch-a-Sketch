let gridSize = document.querySelector("input[type=range]");
const grid = document.querySelector(".grid");
let gridNumber = document.querySelector(".gridsize");
let colorPicker = document.querySelector("input[type=color]");
let normalButton = document.querySelector("#normalbtn");
let rainbowButton = document.querySelector("#rainbowbtn");
let eraserButton = document.querySelector("#eraserbtn");
let clearButton = document.querySelector("#clearbtn");
let NumberOfgirdSize = 16;

createGrid(NumberOfgirdSize);

function createDiv(size) {
    const div = document.createElement("div");
    div.classList.add("grid-box");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
}

clearButton.addEventListener("click", clearGrid);

function clearGrid() {
    grid.textContent = "";
}

gridSize.addEventListener("input", () => {
    gridNumber.textContent = `${gridSize.value} x ${gridSize.value}`;
    grid.textContent = "";
    createGrid(gridSize.value);    
});

