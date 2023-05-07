import { createApp } from 'vue'
import './style.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

import { store, key } from './store'
const settingsEl = document.querySelector('#settings');
const settings = settingsEl ? JSON.parse(settingsEl.innerHTML): alert("error");

const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#000',
    //   surface: '#FFFFFF',
      primary: '#f4ad21',
    },
};
  
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
      },
})

const app = createApp(App,{
    data: () => ({
        message: settings.message
    })
})
app.use(router)
app.use(store, key)
app.use(vuetify)
app.mount('#app')

