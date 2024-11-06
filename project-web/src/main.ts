import { createApp } from "vue";
import router from "./router/index";
// 引入 Element Plus
import ElementPlus from "element-plus";
// 国际化
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import piniaPersist from "pinia-plugin-persist";
import App from "./App.vue";
// 引入 Pinia 构造函数
import { createPinia } from "pinia";

import myconfirm from './utils/myconfirm';

// 实例化 Pinia
const pinia = createPinia();
// 使用持久化插件
pinia.use(piniaPersist);

// 实例化 Vue 应用
const app = createApp(App);

// 全局挂载
app.config.globalProperties.$myconfirm = myconfirm;

app
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(pinia)
  .mount("#app");

// 注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
