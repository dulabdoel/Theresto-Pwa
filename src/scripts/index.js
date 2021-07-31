import 'regenerator-runtime';
import App from './view/app';
import swRegister from './utils/sw-register';
// import lazyload
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import styles
import '../styles/style.css';
import '../styles/utils.css';
import '../styles/responsive.css';
// import componen
import './component/footer';
import './component/header';
import './component/hero';
import './component/to-konten';
import './component/to-top-element';
import './component/error-detail';
import './component/error-home';
import './utils/loader-init';

const app = new App({
  button: document.querySelector('header-bar').shadowRoot.querySelector('#hamburgerButton'),
  drawer: document.querySelector('header-bar').shadowRoot.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
