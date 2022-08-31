import { BACKEND_API_URL } from '~/config/api.config'
import { customBaseURL } from '~/plugins/helpers'
import { loader } from '~/interfaces/loader.interface'

export const BaseController = {
  get: {
    getByDay: async (loading, date = {}) => {
      customBaseURL(BACKEND_API_URL)
      console.log(date)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(`base?createdAfter=${date}`)
      if (data) {
        return data
      }
    }
  }
}
