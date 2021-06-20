/* eslint-disable no-unused-expressions */
const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const headerElement = document.querySelector('header');
const heroElement = document.querySelector('.hero');
//* *event Open */
hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

heroElement.addEventListener('click', (event) => {
  heroElement.classList.remove('open');
  // eslint-disable-next-line no-unused-expressions
  event.stopPropagation;
});

//* *Stop Drawer */
mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation;
});
headerElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation;
});
