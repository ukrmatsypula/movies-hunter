import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes";
import App from "./App.vue";
import api from "@/services/api";
import Carousel3d from "vue-carousel-3d";
import store from "./store";

Vue.prototype.$http = api;
Vue.use(VueRouter);
Vue.use(Carousel3d);

import "@/assets/css/styles.css";

Vue.config.productionTip = false;

new Vue({
  store,
  router: routes,
  render: (h) => h(App),
}).$mount("#app");
