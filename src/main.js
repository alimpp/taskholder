import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/css/app.css'
import './assets/css/app-bg.css'
import './assets/css/app-btn-hover.css'
import './assets/css/app-btn.css'
import './assets/css/app-color.css'
import './assets/css/app-flex.css'
import './assets/css/app-rgba-bg.css'
import './assets/css/app-text-size.css'

createApp(App).use(store).use(router).mount('#app')
