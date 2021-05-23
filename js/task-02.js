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

const potatoesEl = document.createElement('li');
potatoesEl.textContent = 'Картошка';

const mashroomsEl = document.createElement('li');
mashroomsEl.textContent = 'Грибы';

const garlicEl = document.createElement('li');
garlicEl.textContent = 'Чеснок';

const tomatoEl = document.createElement('li');
tomatoEl.textContent = 'Помидоры';

const herbsEl = document.createElement('li');
herbsEl.textContent = 'Зелень';

const spicesEl = document.createElement('li');
spicesEl.textContent = 'Приправы';

wholeList.append(
    potatoesEl,
    mashroomsEl,
    garlicEl,
    tomatoEl,
    herbsEl,
    spicesEl
);

console.log(wholeList);