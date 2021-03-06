import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subject:'Object A',
    predicate:'Object B',
    reason: 'Subject',
    currentScreen:0,
    selectedPervasion:null,
    stageWidth: 800,
    color1: "DeepSkyBlue",
    color2: "gold",
    fontColor: "white",
    objectsFontSize: '24px'
  },
  mutations: {
    setSubject (state, val) {
      state.subject = val;
    },
    setPredicate (state, val) {
      state.predicate = val;
    },
    setReason (state, val) {
      state.reason = val;
    },
    setCurrentScreen (state, val) {
      state.currentScreen = val;
    },
    setSelectedPervasion (state, val) {
      state.selectedPervasion = val;
    },
    setStageWidth (state, val) {
      state.stageWidth = val;
    },
    setObjectFontSize (state, val) {
      state.objectsFontSize = val;
    }
  },
  actions: {

  }
})
