import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './route.js'

createApp(App).use(router).mount('#app')


var prevScroll = window.scrollY;

window.addEventListener('scroll', () => {
    var curScroll = window.scrollY;

    if (curScroll > prevScroll) {
        document.documentElement.style.setProperty('--header-position', `-${84}px`);
        prevScroll = curScroll;
    } else {
        document.documentElement.style.setProperty('--header-position', `${0}px`);
        prevScroll = curScroll;
    }
});
