let gridSize = document.querySelector("input[type=range]");
const grid = document.querySelector(".grid");
let gridNumber = document.querySelector(".gridsize");
let colorPicker = document.querySelector("input[type=color]");
let NumberOfgirdSize = 16;

createGrid(NumberOfgirdSize);

function createDiv(size) {
    const div = document.createElement("div");
    div.classList.add("grid-box");
    div.style.boxSizing = "border-box";
    div.style.border = "1px solid";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
}

