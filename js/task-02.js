'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const fullList = document.querySelector('#ingredients');

const createIngredient = ingredient => {
  const itemElement = document.createElement('li');
  itemElement.textContent = ingredient;

  return itemElement;
};

const createFullList = ingredients.map(createIngredient);

fullList.append(...createFullList);