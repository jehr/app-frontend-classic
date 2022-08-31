/**
 * Valida los errores de las peticiones HTTP
 * @param {Array} inputErrors
 * @returns
 */
export function catchError (inputErrors) {
  const possibleErrors = [] // TODO: Agregar lista de errores
  let message = 'Error Inesperado...'

  if (inputErrors.message) {
    message = inputErrors.message
  }

  possibleErrors.forEach((error) => {
    if (inputErrors[error]) { message = inputErrors[error][0] }
  })

  return message
}

/**
 * ABRE o CIERRA el Loader
 * @param {Boolean} state
 * @param {String} message
 */
export function openLoader (
  statePosting = false,
  stateLoading = false,
  message = null
) {
  const loader = { state: stateLoading, message }

  upValStore('app', 'isPosting', statePosting)
  upValStore('app', 'loader', loader)
}

/**
 * ABRE o CIERRA una alerta de notificación
 * @param {Boolean} state
 * @param {String} message
 */
export function openAlert (type = null, message = null) {
  const alert = { state: type && message, type, message }
  upValStore('app', 'alert', alert)
}

/**
 * Valida en que URL se muestra el Loader
 * @param {String} url
 */
export function isOpenLoader (url) {
  const urls = [] // TODO: Agregar lista de URL´s en las que se carga el Loader
  return urls.includes(url)
}

/**
 *
 * @param {String} mod
 * @param {String} key
 * @param {Any} value
 */
export function upValStore (mod, key, value) {
  const payload = { key, value }
  $nuxt.$store.dispatch(`${mod}/actUpdateValue`, payload)
  // addFullValidation(null);
}

export function propertiesGenerator (props = [], { path, mut } = {}) {
  return props.reduce((obj, prop) => {
    obj[prop.property] = {
      get () {
        if (prop.oneKey && prop.twoKey && prop.threeKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey][prop.threeKey] ||
            prop.defaultValue
          if (prop.type === 'String') { return String(val) }
          if (prop.type === 'Number' && !Number.isNaN(Number(val))) { return Number(val) }
          return val
        }
        if (prop.oneKey && prop.twoKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey] ||
            prop.defaultValue
          if (prop.type === 'String') { return String(val) }
          if (prop.type === 'Number' && !Number.isNaN(Number(val))) { return Number(val) }
          return val
        }
        if (prop.oneKey) {
          const val = $nuxt.$store.state[path][prop.oneKey] || prop.defaultValue
          if (prop.type === 'String') { return String(val) }
          if (prop.type === 'Number' && !Number.isNaN(Number(val))) { return Number(val) }
          return val
        }
      },
      set (value) {
        $nuxt.$store.commit(mut, {
          oneKey: prop.oneKey,
          twoKey: prop.twoKey,
          threeKey: prop.threeKey,
          type: prop.type,
          upper: prop.upper,
          lower: prop.lower,
          value
        })
      }
    }
    return obj
  }, {})
}

export function setProperty (state, data) {
  const oneKey = data.oneKey
  const twoKey = data.twoKey
  const threeKey = data.threeKey
  const type = data.type
  const upper = data.upper
  const lower = data.lower
  let customValue = data.value

  if (type === 'String') { customValue = String(customValue) } // Convertir a String
  if (upper) { customValue = customValue.toUpperCase() }
  if (lower) { customValue = customValue.toLowerCase() }

  if (oneKey && twoKey && threeKey) {
    state[oneKey][twoKey][threeKey] = customValue
    return
  }
  if (oneKey && twoKey) {
    state[oneKey][twoKey] = customValue
    return
  }
  if (oneKey) {
    state[oneKey] = customValue
  }
}
