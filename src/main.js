import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/lara-dark-purple/theme.css"
import "primeicons/primeicons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import Button from "primevue/button"
import TabMenu from 'primevue/tabmenu'

import App from './App.vue'
import router from './router'

import TheTemplate from './components/template/TheTemplate.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('TabMenu', TabMenu)

app.component('TheTemplate', TheTemplate)

app.mount('#app')
