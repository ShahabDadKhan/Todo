import Vue from "vue";
import Vuex from "vuex";
import authModule from "./Modules/auth/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
  },
  state() {
    return {
      dialog: false,
    };
  },
  mutations: {
    openDialog(state) {
      state.dialog = !state.dialog;
      console.log(this.state.dialog);
    },
  },
  getters: {
    openDialogg(state) {
      return state.dialog;
    },
  },
  // actions: {},
  // modules: {},
});
