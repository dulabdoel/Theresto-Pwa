import RestaurantIdb from '../../data/restaurant-db';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Favorite</h2>
    <div id="restos" class="restos">
    </div>
    </div>
    <loader-indicator></loader-indicator>
      `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#restos');
    const loader = document.querySelector('.loader');

    try {
      const restos = await RestaurantIdb.getAllRestos();
      loader.style.display = 'none';
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
      if (restos.length === 0) {
        restosContainer.innerHTML = '<error-favorite></error-favorite>';
      }
    } catch (error) {
      console.log(error);
      loader.style.display = 'none';
      this._errorContent(restosContainer);
    }
  },
};

export default Favorite;
