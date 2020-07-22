import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "assets/vendor/gsap/src/minified/TweenMax.min.js";
import "assets/vendor/gsap/src/minified/plugins/ScrollToPlugin.min.js";
import "assets/vendor/popper.js/dist/umd/popper.min.js";
import "assets/vendor/bootstrap/dist/js/bootstrap.min.js";
import "assets/plugins/nk-share/nk-share.js";
import "assets/vendor/sticky-kit/dist/sticky-kit.min.js";
import "assets/vendor/jarallax/dist/jarallax.min.js";
import "assets/vendor/jarallax/dist/jarallax-video.min.js";
import "assets/vendor/flickity/dist/flickity.pkgd.min.js";
import "assets/vendor/isotope-layout/dist/isotope.pkgd.min.js";
import "assets/vendor/photoswipe/dist/photoswipe.min.js";
import "assets/vendor/photoswipe/dist/photoswipe-ui-default.min.js";
import "assets/vendor/jquery-form/dist/jquery.form.min.js";
import "assets/vendor/jquery-validation/dist/jquery.validate.min.js";
import "assets/vendor/hammerjs/hammer.min.js";
import "assets/vendor/social-likes/dist/social-likes.min.js";
import "assets/vendor/nanoscroller/bin/javascripts/jquery.nanoscroller.js";
import "assets/vendor/keymaster/keymaster.js";
import "assets/js/snow.min.js";
import "assets/js/snow-init.js";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
