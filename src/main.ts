// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia';

//Router
import Router from '@/router';

const app = createApp(App)
const pinia = createPinia();

registerPlugins(app)
app.mount('#app')
app.use(Router).use(pinia)
