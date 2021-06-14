// // /* eslint-disable linebreak-style */
// // /* eslint-disable no-console */
// import RestaurantSource from '../../data/restaurant-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';

// const Home = {
//   async render() {
//     return `
//         <div class="content">
//             <h2 class="content__heading">Tracking Best Resto</h2>
//             <div id="restaurants" class="restaurants">

//             </div>
//         </div>
//     `;
//   },

//   async afterRender() {
//     // Fungsi ini akan dipanggil setelah render()
//     const restaurants = await RestaurantSource.homePage();
//     const restaurantContainer = document.querySelector('#restaurants');
//     restaurants.forEach((restaurant) => {
//       restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
//     });

//     // TODO: tampilkan movies di dalam DOM
//   },
// };

// export default Home;
