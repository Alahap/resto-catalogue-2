/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
// import AddReviewInitiator from '../../utils/review-initiator';
// import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="addReviewContainer">
        <form class="form_review">
          <input id="inputName'></input>
          <text-area id="inputReview"></text-area>
          <button type="submit" class="submitReview">Send</button>
        </form>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailPage(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
    
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', async(event) => {
      event.preventDefault();
      const inputName = document.querySelector('#inputName').value;
      const inputReview = document.querySelector('#inputReview').value;
      const form = document.querySelector('form');
      const dataInput = {
        id: this._id,
        name: inputName,
        review: inputReview,
      };

      if (inputName.value === '') {
        alert('Name cannot be empty!');
      } else if (inputReview.value === '') {
        alert('Review cannot be empty!');
      } else {
        await RestaurantSource.addReview(dataInput);
        form.reset();
        this._renderReview(reviewData.name, reviewData.review);
      };

      // _renderReview(name, review) {
      // const addReviewContainer = document.querySelector('#addReview-container');
      // const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric'}),

      // const reviewData = `
      //   <div class="reviewer-card">
      //       <p class="reviewer-name">${name}</p>
      //       <p class="reviewer-comment">${review}</p>
      //       <p class="reviewer-date">${date}</p>
      //   </div>
      // `;
      // addReviewContainer.innerHTML += dataReview;
      // };

    });

    // AddReviewInitiator.init({
    //   addReviewContainer: document.querySelector('#addReviewContainer'),
    //   restaurant: {
    //     id: url.id,
    //     name: inputName,
    //     review: inputReview,
    //   },
    // });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: url.id,
        pictureId: data.restaurant.pictureId,
        name: data.restaurant.name,
        description: data.restaurant.description,
        rating: data.restaurant.rating,
        city: data.restaurant.city
      },
    });
  },
};

export default Detail;
