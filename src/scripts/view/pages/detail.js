/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like';
import ReviewInitiator from '../../utils/review-initiator';
import { createRestoDetailTemplate, createReviewList } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="resto" class="restaurant">
    </div>
    <loader-indicator></loader-indicator>
    <div id="review-content" class="review-content" ></div>
    <div class="detail-form">
    <h1 class="add-review-title">Tambahkan review</h1>
    <div id="formReviewContainer" class="detail-form-card"></div>
  </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#resto');
    const loader = document.querySelector('.loader');
    const reviewListContainer = document.querySelector('#review-content');
    try {
      const restaurant = await RestaurantSource.detailResto(url.id);
      restoContainer.innerHTML = createRestoDetailTemplate(restaurant);
      const reviewList = await RestaurantSource.detailResto(url.id);
      reviewListContainer.innerHTML = createReviewList(reviewList);

      loader.style.display = 'none';

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        theresto: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
        },
      });
      // Display Toast
      await ReviewInitiator.init({
        formReviewContainer: document.querySelector('#formReviewContainer'),
        id: restaurant.id,
      });
    } catch (error) {
      console.log(error);
      loader.style.display = 'none';
      restoContainer.innerHTML = '<error-detail></error-detail>';
      this._errorContent(restoContainer);
    }
  },
};

export default Detail;
