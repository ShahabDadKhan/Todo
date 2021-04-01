import Vue from "vue";
import Vuex from "vuex";
import authModule from "./Modules/auth/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
  },
  state: {},
  mutations: {},
  actions: {},
  // modules: {},
});
