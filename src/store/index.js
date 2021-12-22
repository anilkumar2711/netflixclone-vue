//default import;
import Vue from 'vue'
import Vuex from 'vuex';
import state from "./state";
import mutations from './mutations';

Vue.use(Vuex);
//Named Export
export const store = new Vuex.Store({
    state,
    mutations
});