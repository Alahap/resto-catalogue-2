/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_name">${restaurant.name}</h2>
    <img tabindex="4" class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h3>Category :</h3>${restaurant.categories.map((category) => category.name).join(', ')}
      <h3>Foods :</h3> ${restaurant.menus.foods.map((food) => food.name).join(', ')}
      <h3>Drinks :</h3> ${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}
    </div>
    <div class="restaurant_description">
      <h3>Overview</h3>
      <p>${restaurant.description}</p>
      <h3>Customer Reviews<h3>
      ${restaurant.customerReviews.map((review) => `
        <h6 tabindex="0">${review.name}</h6>
        <p tabindex="0" class="date-review">${review.date}</p>
        <p tabindex="0">${review.review}</p>
      `).join('')}
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__image" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a tabindex="4" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <h4>Location: ${restaurant.city}</h4>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
