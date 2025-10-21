let body = document.querySelector('body')
const gridContainer = document.createElement('div')
gridContainer.id ="container";
let container =  document.querySelector('#container')

let gridItem = document.createElement('div')
gridItem.classList.add('gridItem')
gridItem.textContent = "Item";

gridContainer.appendChild(gridItem);
body.appendChild(gridContainer)
