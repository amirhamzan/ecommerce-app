import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/lara-dark-purple/theme.css"
import "primeicons/primeicons.css"

import Button from "primevue/button"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)

app.mount('#app')
