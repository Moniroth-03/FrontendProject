import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import router from './router';

const app = createApp(App);

app.use(PrimeVue);
app.use(createPinia());
app.use(router);
app.mount("#app");
