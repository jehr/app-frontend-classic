import {
  catchError,
  isOpenLoader,
  openAlert,
  openLoader
} from '@/helpers/index'

export default function ({ $axios, error: nuxtError }, inject) {
  const api = $axios.create()

  api.onRequest((config) => {
    const isOpen = isOpenLoader(config.url)
    openLoader(
      true,
      isOpen,
      'Estamos procesando la solicitud, por favor espere'
    )
  })

  api.onRequestError(() => {
    openLoader() // Cerrar loader
  })

  api.onResponse(() => {
    openLoader() // Cerrar loader
  })

  api.onError((error) => {
    const URL = error.config.url
    const redirectURL = []
    const code = error.response ? error.response.status : 500 // Codigo de la respuesta HTTP
    const errors = error.response.data.errors
      ? error.response.data.errors
      : error.response.data // Errores de la respuesta HTTP
    const message = error.response
      ? catchError(errors)
      : 'El servidor no responde, Contacte con el administrador por favor' // Mensaje de la respuesta HTTP

    if (redirectURL.includes(URL)) {
      nuxtError({ statusCode: code, message })
    } // Redirigir a pagina de error
    if (!redirectURL.includes(URL)) {
      openAlert('error', message)
    } // Mostrar Alerta
    openLoader() // Cerrar loader

    return Promise.resolve(false)
  })

  api.setBaseURL(process.env.BACKEND_API_URL)

  inject('api', api)
}
