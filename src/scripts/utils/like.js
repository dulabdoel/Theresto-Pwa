/* eslint-disable no-underscore-dangle */
import RestaurantIdb from '../data/restaurant-db';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, theresto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._theresto = theresto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._theresto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const theresto = await RestaurantIdb.getResto(id);
    return !!theresto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantIdb.putResto(this._theresto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantIdb.deleteResto(this._theresto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
