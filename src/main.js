
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import { createHead } from 'unhead'
import 'ant-design-vue/dist/reset.css';
import router from "./router.js"
import { createPinia } from "pinia"

const head = createHead()
const app = createApp(App);

app.use(head)
app.use(Antd)
app.use(router)
app.use(createPinia())
app.mount('#top_boy');