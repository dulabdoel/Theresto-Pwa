import RestaurantSource from '../data/restaurant-source';
import { createReviewTemplate } from '../view/templates/template-creator';

const ReviewInitiator = {
  async init({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createReviewTemplate();

    const btnSubmit = document.querySelector('.btnSubmit');

    btnSubmit.addEventListener('click', async (e) => {
      e.preventDefault();

      const addName = document.querySelector('.addName');
      const addReview = document.querySelector('.addReview');
      const form = document.querySelector('form');

      const reviewData = {
        id: this._id,
        name: addName.value,
        review: addReview.value,
      };

      if (addName.value === '') {
        alert('Name Cannot Be Empty!');
      } else if (addReview.value === '') {
        alert('Review Cannot Be Empty!');
      } else {
        await RestaurantSource.addReview(reviewData);
        form.reset();
        this._renderReview(reviewData.name, reviewData.review);
      }
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.review-container');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataReview = `
      <div class="review-card">
      <span class="review-icon"><i class="fa fa-user fa-lg"></i></span>
        <p class="review-name">${name}</p>
        <p class="review-date">${date}</p>
        <p class="review-comment">${review}</p>
      </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },
};

export default ReviewInitiator;
