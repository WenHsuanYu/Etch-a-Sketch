const Default_color = "#9e8a9e";
const Default_size = 16;
const Default_mode = "normal";

let currentColor = Default_color;
let currentMode = Default_mode;
let currentSize = Default_size;

let gridSize = document.querySelector("input[type=range]");
const grid = document.querySelector(".grid");
const gridNumber = document.querySelector(".gridsize");
const colorPicker = document.querySelector("input[type=color]");
const normalButton = document.querySelector("#normalbtn");
const rainbowButton = document.querySelector("#rainbowbtn");
const eraserButton = document.querySelector("#eraserbtn");
const clearButton = document.querySelector("#clearbtn");

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurreentSize(newSize) {
    
    currentSize = newSize;
}

function setCurrentMode(newMode) {
    changeColorOfButton(newMode);
    currentMode = newMode;
}

colorPicker.addEventListener("input", (e) => {
    setCurrentColor(e.target.value);
});

normalButton.onclick = () => setCurrentMode("normal");
rainbowButton.onclick = () => setCurrentMode("rainbow");
eraserButton.onclick = () => setCurrentMode("eraser");
clearButton.onclick = () => reloadGrid();

function createDiv(size) {
    const div = document.createElement("div");
    div.classList.add("grid-box");
    div.addEventListener("mousedown", changeColor);
    div.addEventListener("mouseover", changeColor);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

let mousedown = false;
grid.addEventListener("mousedown", () => {
    mousedown = true;
});
grid.addEventListener("mouseup", () => {
    mousedown = false;
});

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.appendChild(createDiv(Math.min(grid.clientWidth, grid.clientHeight) / gridSize));
    }
}

function changeColor(e) {
    if (e.type === "mouseover" && !mousedown) {
        return;
    }
    if (currentMode === "rainbow") {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const color = `rgb(${red}, ${green}, ${blue})`;
        e.target.style.backgroundColor = color;
    } else if (currentMode === "normal") {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "rgb(255, 255, 255)";
    }
}
function changeColorOfButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowButton.classList.remove('active');
    } else if (currentMode === 'normal') {
        normalButton.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserButton.classList.remove('active');
    }

    if (newMode === 'rainbow') {
        rainbowButton.classList.add('active');
    } else if (newMode === 'normal') {
        normalButton.classList.add('active');
    } else if (newMode === 'eraser') {
        eraserButton.classList.add('active');
    }
}

function clearGrid() {
    grid.textContent = "";
}

function reloadGrid() {
    clearGrid();
    createGrid(currentSize);
}

gridSize.addEventListener("input", () => {
    gridNumber.textContent = `${gridSize.value} x ${gridSize.value}`;
    currentSize = gridSize.value;
    reloadGrid();   
});

createGrid(currentSize);