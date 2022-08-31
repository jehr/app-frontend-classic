import { Selection } from '~/interfaces/components/pages/selection.interface'
import { setProperty } from '~/plugins/helpers'

const getDefaultState = () => ({
  isSelectionFilter: false,
  selectionFilters: {
    search: '',
    name: ''
  },
  editedSelection: { ...Selection }
})

export const state = () => ({
  ...getDefaultState()
})

export const mutations = {
  setProperty,
  updateKey (state, payload) {
    state[payload.object][payload.key] = payload.value
  },

  updateValue (state, payload) {
    state[payload.key] = payload.value
  },

  resetState (state) {
    Object.assign(state, getDefaultState())
  },

  SET_LIST_CHILDRENS: (state, payload) => {
    state.editedSelection.childrenFamilyEnvironments = [...payload]
  },

  SET_LIST_DATA_OFFICE: (state, payload) => {
    state.editedSelection.selectionItemOfficeKnowledges = [...payload]
  }
}

export const actions = {
  actUpdateKey ({ commit }, payload) {
    commit('updateKey', payload)
  },

  actUpdateValue ({ commit }, payload) {
    commit('updateValue', payload)
  },

  resetSelectionState ({ commit }) {
    commit('resetState')
  }
}
