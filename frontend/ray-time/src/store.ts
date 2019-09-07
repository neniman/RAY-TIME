import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Patient',
    surname: '',
    mobile: '',
    email: ''
  },
  mutations: {
    setRegisterData(state: any, payload: any) {
      state.name = payload.name;
      state.surname = payload.surname;
      state.email = payload.email;
      state.email = payload.email;
    },
  },
  getters: {
    getPatientName(state: any) {
      return state.name;
    }
  },
});
