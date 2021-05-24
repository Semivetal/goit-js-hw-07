'use strict';

const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', checkInputLength);

function checkInputLength() {
    const validInputLength = parseInt(inputLength);
    if (inputRef.value.length === validInputLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
  }
};
