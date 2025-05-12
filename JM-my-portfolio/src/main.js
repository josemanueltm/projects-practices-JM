import './assets/main.scss'

import App from './App.vue'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import es from './locales/es.json'
import en from './locales/en.json'



const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: { es, en },
})



createApp(App).use(i18n).mount('#app')
