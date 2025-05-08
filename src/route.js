import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./components/pages/MainPage.vue";
import HeadphonesPage from "./components/pages/HeadphonesPage.vue";
import SpeakersPage from "./components/pages/SpeakersPage.vue";
import AccressoriesPage from "./components/pages/AccessoriesPage.vue";
import VinylPage from "./components/pages/VinylPage.vue"
import AuthPage from "./components/pages/user/AuthPage.vue";
import RegPage from "./components/pages/user/RegPage.vue";
import UserPage from "./components/pages/user/UserPage.vue";

const routes = [
  { path: '/', component: MainPage, name: 'Main' },
  { path: '/headphones', component: HeadphonesPage, name: 'Headphones' },
  { path: '/speakers', component: SpeakersPage, name: 'Speakers' },
  { path: '/accessories', component: AccressoriesPage, name: 'Accessories' },
  { path: '/vinyl', component: VinylPage, name: 'Vinyl' },
  { path: '/authentification', component: AuthPage, name: 'Authentification' },
  { path: '/registration', component: RegPage, name: 'Registration' },
  { path: '/user/:name', component: UserPage, name: 'User' },
];


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" }
  }
});
