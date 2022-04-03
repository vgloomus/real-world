import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./route"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/style/initialize.scss"


const app = createApp(App);

app.use(createPinia());

app.use(ElementPlus)

app.use(router)

app.mount("#app");
