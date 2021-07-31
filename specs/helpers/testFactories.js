import RestaurantIdb from '../../src/scripts/data/restaurant-db';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: RestaurantIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
