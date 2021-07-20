'use strict';

const refs = {
    listIdRef: document.querySelector('#categories'),
    itemRef: document.querySelectorAll('.item'),
}

console.log(`В списке ${refs.listIdRef.children.length} категории.`);

refs.itemRef.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});