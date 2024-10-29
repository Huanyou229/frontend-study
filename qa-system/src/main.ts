import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "./router";

// 引入pinia
import { createPinia } from 'pinia';
// 实例化pinia
const pinia = createPinia();

import piniaPulginPersistedState from 'pinia-plugin-persistedstate';
pinia.use(piniaPulginPersistedState)


createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}