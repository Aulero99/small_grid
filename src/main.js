import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'

// createApp(App).mount('#app')

const root = createApp(App)
registerGlobalComponents(root)

root
    .mount('#app')
