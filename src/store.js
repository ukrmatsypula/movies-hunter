import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isUserLoggedIn: true,
  },

  getters: {
    isUserLoggedIn: (state) => state.isUserLoggedIn,
  },

  mutations: {
    SET_USER_LOGGED_IN(state, payload) {
      state.isUserLoggedIn = payload;
    },
  },

  actions: {
    setUserLoggedIn({ commit }, loggedIn) {
      commit("SET_USER_LOGGED_IN", loggedIn);
    },
  },
});
