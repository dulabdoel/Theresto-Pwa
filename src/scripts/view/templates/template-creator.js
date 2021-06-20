import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => /* html */ `
<h2 class="restaurant__title">${restaurant.name}</h2> 
<img  class="restaurant__poster" alt="${restaurant.name}" title="${restaurant.name}"
src="${CONFIG.BASE_IMAGE_URL_S + restaurant.pictureId}">
<div class="restaurant__info">
<h3>INFORMATION</h3>
  <h4>City</h4>
  <p>${restaurant.city}</p>
  <h4>Address</h4>
  <p><i class="fa fa-map-marker fa-lg"><span class="address-icon">${restaurant.address}</span></i></p>
  <h4>Rating</h4>
  <p>⭐️<span class="">${restaurant.rating}</span></p>
</div>
<h2 class="restaurant__menu_title">MENU</h2>
<div class="restaurant__menu_kategori">
  <h3>CATEGORIES</h3>
  ${restaurant.categories.map((categor) => `
  <p><span class="restaurant__menu_kategori_name">${categor.name}</span></p>
  `).join('')}
  </div>
  <div class="restaurant__menu_food">
  <h4>FOOD</h4>
  <ul>
        <li>${restaurant.menus.foods[0].name}</li>
        <li>${restaurant.menus.foods[1].name}</li>
        <li>${restaurant.menus.foods[2].name}</li>
        <li>${restaurant.menus.foods[3].name}</li>
      </ul>
  </div>
  <div class="restaurant__menu_drinks">
  <h4>DRINKS</h4>
  <ul>
  <li>${restaurant.menus.drinks[0].name}</li>
  <li>${restaurant.menus.drinks[1].name}</li>
  <li>${restaurant.menus.drinks[2].name}</li>
  <li>${restaurant.menus.drinks[3].name}</li>
</ul>
  </div>
<div class="restaurant__overview">
<h3>Overview</h3>
<p >${restaurant.description}</p>
</div>
`;
const createReviewList = (restaurant) => `
<h1 class="review-title">Review restoran</h1>
<div class="review-container">
${restaurant.customerReviews.map((ulasan) => `
    <div class="review-card">
    <span class="review-icon"><i class="fa fa-user fa-lg" aria-label="icons"></i></span>
      <p class="review-name">${ulasan.name}</p>
      <p class="review-date"><i class="fa fa-calendar"><span>${ulasan.date}</span></i></p>
      <p class="review-comment">-${ulasan.review}-</p>
</div>
`).join('')}
    </div>
`;

const createReviewTemplate = () => /* html */`
  <form action="">
    <label for="addName">Name</label>
    <input type="text" id="addName" class="addName" name="nama" placeholder="Your name.." tabindex="0">

    <label for="addReview">Review</label>
     <textarea name="review" class="addReview" id="addReview" placeholder="Add Review" tabindex="0"></textarea>
 
 <button aria-label="send review" aria-hidden="true" type="submit" class="btnSubmit" tabindex="0">Send</button>
  </form>

`;

const createRestoItemTemplate = (resto) => /* html */ `
  <div class="resto-item">
    <div class="resto-item__header">
    <div class="image-zoom">
    <a href="${`/#/detail/${resto.id}`}" tabindex="0"><img class="resto-item__header__poster" alt="${resto.name}" title="${resto.name}"
    src="${CONFIG.BASE_IMAGE_URL_S + resto.pictureId}"></a>
    </div>
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
        </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}" tabindex="0">${resto.name}</a></h3>
        <div class= "resto-item__header__city">
      <p><i class="fa fa-map-marker" class="map"><span class="resto-item__header__city__name">${resto.city}</span></i></p>
      </div>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => /* html */`
  <button aria-label="like restaurant" id="likeButton" class="like" tabindex="0">
     <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => /* html */`
  <button aria-label="unlike restaurant" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createReviewTemplate,
  createReviewList,
};
