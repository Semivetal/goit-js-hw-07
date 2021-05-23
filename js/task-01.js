'use strict';

const listId = document.querySelectorAll('h2');
console.log(`В списке ${listId.length} категории.`);

const titleCategory = document.querySelector('h2');
console.log('Категория:', titleCategory.textContent);

const itemDoc = document.querySelector('.item');
const itemList = itemDoc.querySelectorAll('li');

console.log('Количество элементов:', itemList.length);
