import { BACKEND_API_URL } from '~/config/api.config'
import { customBaseURL } from '~/plugins/helpers'
import { loader } from '~/interfaces/loader.interface'

export const ReportController = {
  get: {
    byApto: async (loading, date = {}) => {
      customBaseURL(BACKEND_API_URL)
      // console.log(date)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(
        `suitableCitation/by-date?date=${date}`
      )
      if (data) {
        return data
      }
    },
    byNoApto: async (loading, date = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(
        `citations/download-by-date?date=${date}`
      )
      if (data) {
        return data
      }
    },
    byGestions: async (loading, date = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(
        `citations/download-unmanageds?date=${date}`
      )
      if (data) {
        return data
      }
    },
    byNoAssistence: async (loading, date = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(
        `citations/download-notAttend?date=${date}`
      )
      if (data) {
        return data
      }
    },
    all: async (loading, date = {}, dateEnd = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(
        `citations/download-all?startDate=${date}&endDate=${dateEnd}`
      )
      if (data) {
        return data
      }
    },
    byDataDocumentScanned: async (loading, date = {}, dateEnd = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(
        `DataDocument/unloading-scanned?startDate=${date}&endDate=${dateEnd}`
      )
      if (data) {
        return data
      }
    },
    byGeneral: async (loading, date = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(`suitableCitation/by-All?date=${date}`)
      if (data) {
        return data
      }
    },
    byCitations: async (loading, date = {}) => {
      customBaseURL(BACKEND_API_URL)
      if (loading) {
        loader.show('Estamos consultando la información, espere por favor...')
      }
      const data = await $nuxt.$api.$get(`suitableCitation/by-citations?date=${date}`)
      if (data) {
        return data
      }
    }
  }
}
