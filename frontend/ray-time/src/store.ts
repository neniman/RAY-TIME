import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Jonas',
    surname: 'Fingerling',
    mobile: '',
    email: '',
    hasAppointment: true
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
    },
    hasAppointment(state: any) {
      return state.hasAppointment;
    },
    getFullName(state: any) {
      return `${state.name} ${state.surname}`;
    }
  },
});
