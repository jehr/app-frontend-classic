import { BACKEND_API_URL } from '~/config/api.config'
import { customBaseURL, showOptionModal } from '~/plugins/helpers'
import { loader } from '~/interfaces/loader.interface'
import { toast } from '~/interfaces/toast.interface'

export const AspirantController = {
  get: {
    byDocument: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get(`by-document?Document=${params}`)

      // console.log(data)
      if (data) {
        return data
      }
    },
    dataDocument: async (document) => {
      try {
        const { data } = await $nuxt.$api.$get(
          `datadocument/${document}/by-document`
        )
        if (data === null) {
          return false
        }

        if (data.document === document) {
          return data
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  post: {
    uploadIdentificationDocument: async (payload) => {
      customBaseURL(BACKEND_API_URL)
      if (payload) {
        loader.show('Estamos subiendo el documento, espere por favor...')
      }
      const formData = new FormData()

      formData.append(
        'sideA',
        payload.sideA,
        Math.round(Math.random() * 10000000) + '' + payload.sideA.name
      )
      formData.append(
        'sideB',
        payload.sideB,
        Math.round(Math.random() * 10000000) + '' + payload.sideB.name
      )

      const values = [...formData.entries()]
      console.log(values)

      try {
        toast.show('info', 'Estamos escaneando el documento...')
        const { result } = await $nuxt.$api.$post(
          'datadocument/by-files',
          formData
        )

        showOptionModal('isAptoCreate')

        if (result) {
          toast.show('success', 'Documento escaneado correctamente')
        } else {
          toast.show('info', 'Los datos del Documento ya fueron ingresados')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
