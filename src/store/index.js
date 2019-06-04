import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getter"
import actions from "./action"
import mutations from "./mutation"
Vue.use(Vuex);
console.log(getters)
export default new Vuex.Store({
	strict:true
	,
	state,
	getters ,
	mutations,
	actions


})