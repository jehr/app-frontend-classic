import { Citation } from '~/interfaces/components/pages/citation.interface'
import { setProperty } from '~/plugins/helpers'

const getDefaultState = () => ({
  isCitationFilter: false,
  citationFilters: {
    search: '',
    name: ''
  },
  editedCitation: { ...Citation }
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
  },
  setProperty
}

export const actions = {
  actUpdateKey ({ commit }, payload) {
    commit('updateKey', payload)
  },

  actUpdateValue ({ commit }, payload) {
    commit('updateValue', payload)
  },

  resetCitationState ({ commit }) {
    commit('resetState')
  }
}
