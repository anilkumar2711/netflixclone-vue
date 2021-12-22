//default import;
import Vuex from 'vuex';
import state from "./state";
import mutations from './mutations';
//Named Export
export const store = new Vuex.Store({
    state,
    mutations
});