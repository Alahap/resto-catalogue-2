/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../component/menu-bar';
import '../component/main-content';
import '../component/footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';
// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
//   WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

// window.addEventListener('load', () => {
//   app.renderPage();
//   // swRegister();
// });
