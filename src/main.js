import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "@/store";

Vue.config.productionTip = false;
Vue.prototype.$startLoading = function (message = "") {
  store.commit("startLoading", message);
};
Vue.prototype.$stopLoading = function () {
  store.commit("stopLoading");
};
Vue.prototype.$showSnackbar = function (type, message) {
  store.dispatch("showSnackbar", { type: type, message: message });
};

Vue.prototype.$hideSnackbar = function () {
  store.commit("hideSnackbar");
};
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
