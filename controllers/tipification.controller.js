import { loader } from '~/interfaces/loader.interface'
import { BACKEND_API_URL } from '~/config/api.config'
import { customBaseURL } from '~/plugins/helpers'

export const TipificationController = {
  get: {
    all: async (type, loading) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get(`tipifications/${type}`)
      if (data) {
        return data
      }
    }
  },
  post: {
    create: async (notCitationData) => {
      customBaseURL(BACKEND_API_URL)

      const payload = {
        ...notCitationData
      }

      loader.show('estamos guardando la citación, espere por favor...')
      const data = await $nuxt.$api.$post(
        'citation',
        citation.clearPayload(payload)
      )

      if (data) {
        citation.refresh()
        showOptionModal('isFormCitation')
        toast.show('success', 'Se guardo la citación correctamente')
        return data
      }
    }
  }
}
