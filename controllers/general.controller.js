import { BACKEND_API_URL } from '~/config/api.config'
import { customBaseURL } from '~/plugins/helpers'
import { loader } from '~/interfaces/loader.interface'

export const GeneralController = {
  get: {
    allDocuments: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const param = 'C3449222-B1E0-4562-BF65-B6AA60323E26'

      const data = await $nuxt.$api.$get(`Configurations/${param}`, { params })
      if (data) {
        return data
      }
    },
    allCountries: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get('countries', { params })
      if (data) {
        return data
      }
    },
    allDepartmentByIdCountry: async (id) => {
      customBaseURL(BACKEND_API_URL)
      loader.show('Estamos consultando la información, espere por favor...')

      const data = await $nuxt.$api.$get(`states/${id}/by-country`)
      if (data) {
        return data
      }
    },
    allCitiesByIdDepartment: async (id) => {
      customBaseURL(BACKEND_API_URL)
      loader.show('Estamos consultando la información, espere por favor...')

      const data = await $nuxt.$api.$get(`cities/${id}/by-state`)
      if (data) {
        return data
      }
    },
    allCampaings: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get('campaigns', { params })
      if (data) {
        if (data.result) {
          return data.data
        }
        return data.message
      }
    },

    allJobs: async (loading, params = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }

      const data = await $nuxt.$api.$get('jobs', { params })
      if (data) {
        if (data.result) {
          return data.data
        }
        return data.message
      }
    }
  }
}
