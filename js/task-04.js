'use strict';

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementClick = document.querySelector('.decrementCl');
const incrementClick = document.querySelector('.incrementCl');
const valueId = document.querySelector('#value');

decrementClick.addEventListener('click', function () {
    counterValue.decrement();
    valueId.textContent = counterValue.value;
});

incrementClick.addEventListener('click', function () {
    counterValue.increment();
    valueId.textContent = counterValue.value;
});
