'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const wholeList = document.querySelector('#ingredients');

const createIngredientItem = ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
};

const createWholeList = ingredients.map(createIngredientItem);

wholeList.append(...createWholeList);