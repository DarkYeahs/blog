import axios, { AxiosError, AxiosResponse } from 'axios';

import VueRouter from 'vue-router';
import * as Logger from 'js-logger';
import Home from './layouts/home';
import Login from './layouts/login'
// import NotFound from './layouts/not-found';

export const routes = [
  {
    path: '/login',
    name: '',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});
