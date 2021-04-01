// import { extend } from "vue/types/umd";
import mutations from "../auth/mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  mutations,
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  actions,
  getters,
};
