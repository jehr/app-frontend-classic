import { loader } from '~/interfaces/loader.interface'
import { customBaseURL, setLogin } from '~/plugins/helpers'
import { BACKEND_API_URL } from '~/config/api.config'
import { toast } from '~/interfaces/toast.interface'

export const AuthController = {
  login: {
    admin: async (credentials) => {
      customBaseURL(BACKEND_API_URL)

      const data = await $nuxt.$api.$post('auth-token', credentials)
      if (data) {
        setLogin('admin', data.token, data.user)
        $nuxt.$router.push({ name: 'citations' })
      } else {
        toast.show('error', 'Usuario o contraseña incorrectos')
      }
    }
  },

  logout: () => {
    loader.show('Cerrando sesión... por favor espere')
    sessionStorage.clear()
    window.location.reload()
  }
}
