let body = document.querySelector('body')
const gridContainer = document.createElement('div')
gridContainer.id ="container";
let container =  document.querySelector('#container')

let newGridBtn = document.createElement('button');
newGridBtn.textContent = 'Choose a new grid';
let newGridContainer = document.createElement('div');
newGridContainer.id = "new-grid";
let newGrid = document.querySelector('#new-grid');
let paragraph = document.createElement('p')


function randomBgColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


function getNewGrid(gridSize){
    // clear the existing container's content
    gridContainer.innerHTML = '';
    let totalSize = 600;
    let cellSize = totalSize / gridSize;
    paragraph.textContent = `${gridSize}x${gridSize}` + ' Grid size';

    for(let i = 0; i < gridSize * gridSize; i++){
    let gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.style.width = `${cellSize}px`;
    gridItem.style.height = `${cellSize}px`;
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = randomBgColor();
    })
    gridContainer.appendChild(gridItem);
    }
}

newGridBtn.addEventListener('click', () => {
    let gridSize = prompt("Enter a number between 1 and 100");
    size = parseInt(gridSize);
        if(isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        alert("Invalid Input! Choose a number from 1 to 100");
        return;
    }
    getNewGrid(gridSize);
});

//default grid size
getNewGrid(16);



newGridContainer.appendChild(newGridBtn);
newGridContainer.appendChild(paragraph);
body.appendChild(newGridContainer);
body.appendChild(gridContainer);
