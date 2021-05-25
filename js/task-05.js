'use strict';

const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('#name-output'),
};

const changeName = (event) => {
    refs.greeting.textContent = event.currentTarget.value !== ''
        ? refs.greeting.textContent = event.currentTarget.value
        : refs.greeting.textContent = 'незнакомец'
}

refs.input.addEventListener('input', changeName);

