import { BACKEND_API_URL } from '~/config/api.config'
import { customBaseURL } from '~/plugins/helpers'

export default async function ({ $api, redirect, store }) {
  const isAuthenticated = !!store.state.auth.user
  // Authenticated allow pass
  if (!isAuthenticated) {
    return redirect('/login')
  } else {
    customBaseURL(BACKEND_API_URL)
    try {
      const response = await $nuxt.$api.$post('auth-token', {
        login: store.state.auth.user,
        password: store.state.auth.pass
      })
      if (response) {
        // console.log(response)
        store.commit('auth/setToken', response.token)
      } else {
        store.commit('auth/setToken', null)
        return redirect('/login')
      }
    } catch (error) {
      console.log('error', error)
      store.commit('auth/setToken', null)
      return redirect('/login')
    }
  }
  // Get token from store
  const token = store.state.auth.token
  // Set token to api
  if (token) {
    $api.setHeader('Authorization', `Bearer ${token}`)
  } else {
    $api.setHeader(false)
  }
}
