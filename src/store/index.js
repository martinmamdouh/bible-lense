import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    snackbars: [],
    loadingMsg: "",
    connectedNetwork: null,
    connectionStatus: false,
    connectedAddress: null,
    csrfToken: null,
  },
  mutations: {
    startLoading(state, message) {
      state.loading = true;
      state.loadingMsg = message;
    },
    stopLoading(state) {
      state.loading = false;
      state.loadingMsg = "";
    },
    showInfoSnackbar(state, message) {
      state.snackbars.push({
        snackbarMsg: message,
        snackbarColor: "#06357a",
        timeout: 3000,
        showSnackbar: true,
      });
    },
    showSuccessSnackbar(state, message) {
      state.snackbars.push({
        snackbarMsg: message,
        snackbarColor: "#71bd4b",
        timeout: 8000,
        showSnackbar: true,
      });
    },
    showWarningSnackbar(state, message) {
      state.snackbars.push({
        snackbarMsg: message,
        snackbarColor: "#ff9900",
        timeout: 8000,
        showSnackbar: true,
      });
    },
    showErrorSnackbar(state, message) {
      state.snackbars.push({
        snackbarMsg: message,
        snackbarColor: "#fe5f55",
        timeout: 16000,
        showSnackbar: true,
      });
    },
    hideSnackbar(state) {
      state.snackbars = state.snackbars.filter((snackbar) => {
        return snackbar.showSnackbar;
      });
    },
    setCsrfToken(state, csrfToken) {
      state.csrfToken = csrfToken;
    },
  },
  actions: {
    showSnackbar(context, data) {
      if (data.type == "error") {
        context.commit("showErrorSnackbar", data.message);
      } else if (data.type == "warning") {
        context.commit("showWarningSnackbar", data.message);
      } else if (data.type == "success") {
        context.commit("showSuccessSnackbar", data.message);
      } else {
        context.commit("showInfoSnackbar", data.message);
      }
    },
  },
  modules: {},
});
