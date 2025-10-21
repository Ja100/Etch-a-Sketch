let body = document.querySelector('body')
const gridContainer = document.createElement('div')
gridContainer.id ="container";
let container =  document.querySelector('#container')
let gridSize = 16;

for(let i = 1; i < gridSize * gridSize; i++){
    let gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridContainer.appendChild(gridItem);

}




body.appendChild(gridContainer)
