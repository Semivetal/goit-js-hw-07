'use strict';

const listIdRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log(`В списке ${listIdRef.children.length} категории.`);

itemRef.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});