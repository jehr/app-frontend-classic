const getDefaultState = () => ({
  isFormTraining: false,
  isShowTraining: false,
  isFormCitation: false,
  isShowCitation: false,
  isFormUploadDocument: false,
  isShowCitationAssistance: false,
  isFormSuitableCitation: false,
  isFormSuitable: false,
  isFormSelection: false,
  isModal: false,
  isAptoCreate: false,
  titleModal: '',

  // Configs
  typesManagements: []
})

export const state = () => ({
  ...getDefaultState()
})

export const mutations = {
  updateKey (state, payload) {
    state[payload.object][payload.key] = payload.value
  },

  updateValue (state, payload) {
    state[payload.key] = payload.value
  },

  resetState (state) {
    Object.assign(state, getDefaultState())
  }
}

export const actions = {
  actUpdateKey ({ commit }, payload) {
    commit('updateKey', payload)
  },

  actUpdateValue ({ commit }, payload) {
    commit('updateValue', payload)
  },

  resetOptionState ({ commit }) {
    commit('resetState')
  }
}
