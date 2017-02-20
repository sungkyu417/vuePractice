import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    timeEntries: [],
    totalTime: 0
  }
const mutations={
    setTotalTime (state, time) {
      state.totalTime = time
    },
    timeUpdate (state, timeEntry) {
      // mutate state
      state.timeEntries.push(timeEntry)
      state.totalTime += parseFloat(timeEntry.totalTime)
    },
    fetchData (state, data) {
      state.timeEntries = data
    },
    deleteTimeEntry (state, timeEntry) {
      state.totalTime -= parseFloat(timeEntry.totalTime)

      let index = state.timeEntries.indexOf(timeEntry)
      state.timeEntries.splice(index, 1)
    }
  }
const actions={
	setTotalTime: ({ commit }) => commit('setTotalTime'),
  	timeUpdate: ({ commit }) => commit('timeUpdate'),
  	fetchData: ({ commit }) => commit('fetchData'),
  	deleteTimeEntry: ({ commit }) => commit('deleteTimeEntry')
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})