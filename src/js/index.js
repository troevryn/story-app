/* eslint-disable no-unused-vars */
import '../sass/main.scss';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/story/add';
import Profile from './pages/profile';

import './components/index';
import * as bootstrap from 'bootstrap';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const routes = {
  '/': Dashboard,
  '/story/add.html': Add,
  '/profile.html': Profile,
  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();

  route.init();
});
