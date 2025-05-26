import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.scss'
import { createPinia } from 'pinia'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import router from './router/index'
import './api/mock'

const app=createApp(App)

const pinia=createPinia()

app.use(router)

app.use(pinia)

app.mount('#app')
