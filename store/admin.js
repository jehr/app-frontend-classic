const getDefaultState = () => ({
  drawers: [
    {
      name: 'Usuarios',
      to: '/users',
      icon: 'mdi-account',
      access: [],
      subRoutes: []
    },
    {
      name: 'Valoraciones',
      to: '/citations',
      icon: 'mdi-medical-bag',
      access: [],
      subRoutes: []
    },
    {
      name: 'Reportes',
      to: '/reports',
      icon: 'mdi-chart-bar',
      access: ['Administrador'],
      subRoutes: []
    }
    // {
    //   name: 'Selección',
    //   to: '/selections',
    //   icon: 'mdi-account-check',
    //   access: [],
    //   subRoutes: []
    // },
    // {
    //   name: 'Obtener base',
    //   to: '/base',
    //   icon: 'mdi-database',
    //   access: [],
    //   subRoutes: []
    // }
  ]
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
