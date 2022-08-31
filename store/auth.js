const getDefaultState = () => ({
  admin: {
    token: null,
    isLoggedIn: false
  }
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

  resetAuthState ({ commit }) {
    commit('resetState')
  }
}
