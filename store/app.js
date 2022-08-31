import { Alert } from '~/components/Alert/Interface'
import { Loader } from '~/interfaces/loader.interface'
import { setProperty } from '~/helpers'
import { Toast } from '~/interfaces/toast.interface'

const getDefaultState = () => ({
  loader: { ...Loader },
  alert: { ...Alert },
  isPosting: false,
  user: null,
  isAdmin: false,
  toast: { ...Toast }
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
  addFullValidations (state, payload) {
    // console.log('addFullValidations', payload)
    // state[payload.key] = payload.value
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

  resetAppState ({ commit }) {
    commit('resetState')
  },

  actAddFullValidations ({ commit }, payload) {
    commit('addFullValidations', payload)
  }
}

export const getters = {
  authUser: (state) => {
    return state.user
  }
}
