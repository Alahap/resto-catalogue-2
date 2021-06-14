/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  // static async homePage() {
  //   const response = await fetch(API_ENDPOINT.HOME);
  //   const responseJson = await response.json();
  //   return responseJson.restaurants;
  // }

  static async listPage() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log(responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async detailPage(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview (review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(review)
    })
    return response
  }
}

export default RestaurantSource;
