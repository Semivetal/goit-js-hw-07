'use strict';

const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', changeName)

function changeName () {
    refs.greeting.textContent = refs.input.value;
    if (refs.greeting.textContent === '' || refs.greeting.textContent === null) {
        refs.greeting.textContent = 'незнакомец';
    }
};

