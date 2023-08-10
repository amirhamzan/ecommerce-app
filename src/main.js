import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/vela-green/theme.css"
import "primeicons/primeicons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import Button from "primevue/button"
import TabMenu from 'primevue/tabmenu'
import Dialog from 'primevue/dialog'

import App from './App.vue'
import router from './router'

import TheTemplate from './components/template/TheTemplate.vue'
import ItemCard from './components/general/ItemCard.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('TabMenu', TabMenu)
app.component('Dialog', Dialog)

app.component('TheTemplate', TheTemplate)
app.component('ItemCard', ItemCard)

app.mount('#app')
