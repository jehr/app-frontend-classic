import { BACKEND_API_URL } from '~/config/api.config'
import { customBaseURL, showOptionModal } from '~/plugins/helpers'
import { loader } from '~/interfaces/loader.interface'
import { citation } from '~/interfaces/components/pages/citation.interface'
import { suitableCitation } from '~/interfaces/components/pages/suitable-citation.interface'
import { toast } from '~/interfaces/toast.interface'

export const CitationController = {
  get: {
    all: async (loading) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get('valoration/from-today')
      if (data) {
        return data
      }
    },
    byPhone: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get(`valoration/${params}/by-phone`)
      if (data) {
        return data
      }
    },
    byDocument: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get(`valoration/${params}/by-document`)
      if (data) {
        return data
      }
    },
    byName: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(`valoration/${params}/by-name`)
      if (data) {
        return data
      }
    },
    duplicate: async (params = '') => {
      customBaseURL(BACKEND_API_URL)
      loader.show('Estamos consultando la información, espere por favor...')
      const data = await $nuxt.$api.$get(`valoration/${params}/duplicated`)
      if (data) {
        $nuxt.$emit('refresh-citation')
        toast.show('success', 'Se actualizado la citación correctamente')
        return data
      }
    },
    reason: async (loading) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get('valoration/reason-type')
      if (data) {
        return data
      }
    },
    suitableByDocument: async (params = '') => {
      customBaseURL(BACKEND_API_URL)
      const data = await $nuxt.$api.$get(
        `suitableCitation/${params}/by-document`
      )
      if (data) {
        return data
      }
    },
    byRecruiment: async (params = '') => {
      customBaseURL(BACKEND_API_URL)
      const data = await $nuxt.$api.$get(
        `suitableCitation/${params}/by-recruinmentId`
      )
      if (data) {
        return data
      }
    }
  },
  post: {
    create: async (citationData) => {
      customBaseURL(BACKEND_API_URL)

      const payload = {
        ...citationData
      }

      loader.show('estamos guardando la citación, espere por favor...')
      const data = await $nuxt.$api.$post(
        'valoration',
        citation.clearPayload(payload)
      )

      if (data) {
        $nuxt.$emit('refresh-citation')
        showOptionModal('isFormCitation')
        toast.show('success', 'Se guardo la citación correctamente')
        return data
      }
    },
    createSuitable: async (suitableData) => {
      customBaseURL(BACKEND_API_URL)

      const payload = {
        ...suitableData,
        citationId: suitableData.id
      }

      loader.show('estamos guardando la citación, espere por favor...')
      try {
        const data = await $nuxt.$api.$post(
          'suitableCitation',
          suitableCitation.clearPayload(payload)
        )

        if (data) {
          $nuxt.$emit('refresh-citation')
          showOptionModal('isFormSuitableCitation')
          toast.show('success', 'Se guardo la citación correctamente')
          return data
        }
      } catch (error) {
        toast.show('error', 'No se pudo guardar la citación')
      }
    }
  },
  put: {
    byId: async (id, citationData, type) => {
      customBaseURL(BACKEND_API_URL)

      loader.show('estamos actualizando la citación, espere por favor...')

      const data = await $nuxt.$api.$put(`valoration/${id}`, citationData)

      if (data) {
        if (type === 1) {
          showOptionModal('isShowCitation') // Close modal
        } else {
          showOptionModal('isShowCitationAssistance') // Close modal
        }
        $nuxt.$emit('refresh-citation')
        toast.show('info', 'Se ha actualizado la citación correctamente') // Open toast
        return data
      }
    },

    updateSuitable: async (id, citationData) => {
      customBaseURL(BACKEND_API_URL)

      if (id === '' || id === undefined || id === null) {
        delete citationData.id
        toast.show('error', 'Upsss, no se pudo actualizar la citación')
        return
      }

      loader.show('estamos actualizando la citación, espere por favor...')
      const data = await $nuxt.$api.$put(`suitableCitation/${id}`, citationData)

      if (data.data) {
        $nuxt.$emit('refresh-citation')
        showOptionModal('isFormSuitableCitation')
        toast.show('success', 'Se guardo la citación correctamente')
        return data
      } else {
        toast.show('error', 'No se pudo actualizar la citación')
      }
    }
  }
}
