import RestaurantIdb from '../../data/restaurant-db';
import FavoriteRestoSearchPresenter from '../liked-restos/favorite-resto-search-presenter';
import FavoriteRestoSearchView from '../liked-restos/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../liked-restos/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const loader = document.querySelector('.loader');

    try {
      loader.style.display = 'none';
      new FavoriteRestoShowPresenter({ view, favoriteRestos: RestaurantIdb });
      new FavoriteRestoSearchPresenter({ view, favoriteRestos: RestaurantIdb });
    } catch (error) {
      console.log(error);
      loader.style.display = 'none';
    }
  },
};

export default Favorite;
