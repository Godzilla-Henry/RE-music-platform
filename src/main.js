import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* PrimeVue */
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
/* End PrimeVue */

/* PrimeVue carousel */
import './assets/css/PrimeVueCarousel.css'
/* End PrimeVue carousel */

const pinia = createPinia()
const app = createApp(App)

app
.use(router)
.use(pinia)
.use(PrimeVue)
.component('Button', Button)
.component('Carousel', Carousel)
.component('Card', Card)
.mount('#app')
