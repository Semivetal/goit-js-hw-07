'use strict';

const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('#name-output'),
};

const changeName = (evt) => {
    const currentValue = evt.currentTarget.value;

    refs.greeting.textContent = currentValue !== ''
        ? refs.greeting.textContent = currentValue
        : refs.greeting.textContent = 'незнакомец'
};

refs.input.addEventListener('input', changeName);



