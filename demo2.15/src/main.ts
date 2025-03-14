import { createApp } from "vue";
import Router from "./router/index";
import "./styles/reset.scss";
import App from "./App.vue";
const app = createApp(App);
app.use(Router);
app.mount("#app");
