import { createApp } from 'vue'
import App from './App.vue'
// 注意：这种方式将会导入所有组件
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount('#app')
