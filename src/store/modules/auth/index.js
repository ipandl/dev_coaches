import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: false,
  state() {
    return {
      userId: null,
      token: null,
    };
  },
  mutations,
  actions,
  getters,
};
