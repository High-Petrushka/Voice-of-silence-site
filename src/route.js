import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./components/pages/MainPage.vue";
import HeadphonesPage from "./components/pages/HeadphonesPage.vue";
import SpeakersPage from "./components/pages/SpeakersPage.vue";
import AccressoriesPage from "./components/pages/AccessoriesPage.vue";
import VinylPage from "./components/pages/VinylPage.vue"

const routes = [
  { path: '/', component: MainPage, name: 'Main' },
  { path: '/headphones', component: HeadphonesPage, name: 'Headphones' },
  { path: '/speakers', component: SpeakersPage, name: 'Speakers' },
  { path: '/accessories', component: AccressoriesPage, name: 'Accessories' },
  { path: '/vinyl', component: VinylPage, name: 'Vinyl' },
];


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
