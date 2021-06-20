/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './drawer';
import './footer';
// import data JSON
import data from '../DATA.json';
/* import gambar */
import headlineImg from '../public/images/heros/hero-image_1.jpg';
import restoLogo from '../public/images/heros/restoname.png';
import ratingpng from '../public/images/heros/rating.png';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-use-before-define
  apiListElement;
});
console.log(data);
// Looping Data JSON
const apiListElement = document.querySelector('#main-konten');
data.restaurants.forEach((restaurant) => {
  apiListElement.innerHTML += `
  <article class="item-konten">
  <img class="image-item" tabindex="0" src="${restaurant.pictureId}" alt="${restaurant.name}">
  <div class="konten-post">
      <h1 tabindex="0" class="Name-konten">${restaurant.name}</h1>
      <h2 tabindex="0" class="Kota-konten">${restaurant.city}</h2>
      <p tabindex="0" class="isi-konten">${restaurant.description}</p>
      <p class="rating"><img   src="${ratingpng}"> ${restaurant.rating}</p>
  </div>
</article>

  

    `;
});

document.querySelector('#imgheadline').src = headlineImg;
document.querySelector('#restologo').src = restoLogo;
