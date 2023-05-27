import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes";
import App from "./App.vue";

Vue.use(VueRouter);

import "@/assets/css/styles.css";

Vue.config.productionTip = false;

new Vue({
  router: routes,
  render: (h) => h(App),
}).$mount("#app");
