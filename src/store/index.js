import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/actions';
import getters from './getters/getters';
import mutations from './mutations/mutations';
import state from './state/state';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
