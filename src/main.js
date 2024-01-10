import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
// pinia.use(piniaPluginPersistedstate)
pinia.use(pinia)
app.use(router)
app.mount('#app')

