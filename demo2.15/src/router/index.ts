import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./router";
const Router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
});
export default Router;
