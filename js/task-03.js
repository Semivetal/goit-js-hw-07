'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryPicture = pic => {
const { url, alt } = pic;
return `<li> <img src = ${url} alt = ${alt} width = 720 height = 480> </li>`;
};

const galleryMarkup = images.map(createGalleryPicture);

const galleryWholeList = document.querySelector('#gallery');
galleryWholeList.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryWholeList.style.display = 'flex';
galleryWholeList.style.listStyle = 'none';
// galleryWholeList.style.flexDirection = 'column';
// galleryWholeList.style.justifyContent = 'center';
