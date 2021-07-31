import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => /* html */ `
<h2 class="resto__name">${resto.name}</h2>
<img class="lazyload resto__poster" alt="${resto.name}" title="${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL_S + resto.pictureId}">
<div class="resto__info">
    <h3>INFORMATION</h3>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p><i class="fa fa-map-marker fa-lg"><span class="address-icon">${resto.address}</span></i></p>
    <h4>Rating</h4>
    <p class="icon-star"><i class="fa fa-star" aria-hidden="true"></i><span class="">${resto.rating}</span></p>
</div>
<h2 class="resto__menu_title">MENU</h2>
<div class="resto__menu_kategori">
    <h3>CATEGORIES</h3>
    ${resto.categories
    .map(
      (categor) => `
    <p><span class="resto__menu_kategori_name">${categor.name}</span></p>
    `,
    )
    .join('')}
</div>
<div class="resto__menu_food">
    <h4>FOOD</h4>
    <ul>
        <li>${resto.menus.foods[0].name}</li>
        <li>${resto.menus.foods[1].name}</li>
        <li>${resto.menus.foods[2].name}</li>
        <li>${resto.menus.foods[3].name}</li>
    </ul>
</div>
<div class="resto__menu_drinks">
    <h4>DRINKS</h4>
    <ul>
        <li>${resto.menus.drinks[0].name}</li>
        <li>${resto.menus.drinks[1].name}</li>
        <li>${resto.menus.drinks[2].name}</li>
        <li>${resto.menus.drinks[3].name}</li>
    </ul>
</div>
<div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
</div>
`;
const createReviewList = (restaurant) => /* html */ `
<h1 class="review-title">Review restoran</h1>
<div class="review-container">
    ${restaurant.customerReviews
    .map(
      (ulasan) => `
    <div class="review-card">
        <span class="review-icon"><i class="fa fa-user fa-lg" aria-label="icons"></i></span>
        <p class="review-name">${ulasan.name}</p>
        <p class="review-date"><i class="fa fa-calendar"><span>${ulasan.date}</span></i></p>
        <p class="review-comment">-${ulasan.review}-</p>
    </div>
    `,
    )
    .join('')}
</div>
`;

const createReviewTemplate = () => /* html */ `
<form action="" class="review-item">
    <label for="addName">Name</label>
    <input type="text" id="addName" class="addName" name="nama" placeholder="Your name.." tabindex="0">

    <label for="addReview">Review</label>
    <textarea name="review" class="addReview" id="addReview" placeholder="Add Review" tabindex="0"></textarea>

    <button aria-label="send review" type="submit" class="btnSubmit" id="submitReview" tabindex="0">Send</button>
</form>

`;

const createRestoItemTemplate = (resto) => /* html */ `
<div class="resto-item">
    <div class="resto-item__header">
        <div class="image-zoom">
            <a href="${`/#/detail/${resto.id}`}" tabindex="0"><img class="lazyload resto-item__header__poster"
                    alt="${resto.name || '-'}" title="${resto.name || '-'}"
                    data-src="${CONFIG.BASE_IMAGE_URL_S + resto.pictureId}"></a>
        </div>
        <div class="resto-item__header__rating">
            <p><i class="fa fa-star" aria-hidden="true"></i><span class="resto-item__header__rating__score">${resto.rating || '-'}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto__name"><a href="${`/#/detail/${resto.id}`}" tabindex="0">${resto.name || '-'}</a></h3>
        <div class="resto-item__header__city">
            <p><i class="fa fa-map-marker" class="map"><span class="resto-item__header__city__name">${resto.city || '-'}</span></i></p>
        </div>
        <p>${resto.description || '-'}</p>
    </div>
</div>
  `;

const createLikeRestoButtonTemplate = () => /* html */ `
  <button aria-label="like restaurant" id="likeButton" class="like" tabindex="0">
     <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => /* html */ `
  <button aria-label="unlike restaurant" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate, createRestoItemTemplate, createRestoDetailTemplate, createReviewTemplate, createReviewList,
};
