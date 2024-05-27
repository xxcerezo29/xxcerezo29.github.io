import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'

import { BiGithub, BiLinkedin, FaInstagram } from 'oh-vue-icons/icons'

addIcons(BiGithub, BiLinkedin, FaInstagram)

const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
