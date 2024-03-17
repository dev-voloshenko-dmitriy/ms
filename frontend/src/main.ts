import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { globalCookiesConfig } from "vue3-cookies";

import App from './App.vue'
import router from './router'

globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  });

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
