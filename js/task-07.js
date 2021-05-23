'use strict';

const fontsizeControllerRef = document.querySelector('#font-size-control');
const fontsizeControlledTextRef = document.querySelector('#text');

fontsizeControllerRef.addEventListener('input', fontSizeDefiner);

function fontSizeDefiner() {
    fontsizeControlledTextRef.style.fontSize = `${fontsizeControllerRef.value * 1.5}px`;
};
