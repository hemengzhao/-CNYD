import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';
import './assets/css/cp-common.scss'
const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
