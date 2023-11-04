import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
app.use(createPinia());
app.mount("#app");
