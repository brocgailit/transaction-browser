import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCartShopping,
    faRightLeft,
    faSuitcase,
    faDice,
    faBolt,
    faQuestion,
    faChevronLeft,
    faCircleNotch
} from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping);
library.add(faRightLeft);
library.add(faSuitcase);
library.add(faDice);
library.add(faBolt);
library.add(faQuestion);
library.add(faChevronLeft);
library.add(faCircleNotch);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
