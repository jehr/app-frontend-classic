import * as storeConfig from '../config/store.config'

/**
 * ABRE o CIERRA una alarma de notificación
 * @param {Boolean} state
 * @param {String} message
 */
export function openAlert (type, message) {
  if (type && message) {
    upValStore('app', 'alert', { state: true, type, message })
  } else {
    upValStore('app', 'alert', { state: false, type: null, message: null })
  }
}

export function upValStore (mod, key, value) {
  const payload = { key, value }
  $nuxt.$store.dispatch(`${mod}/actUpdateValue`, payload)
  // addFullValidation(null);
}

/**
 *
 * @param {String} payload
 */
export function addFullValidation (payload) {
  $nuxt.$store.dispatch('app/actAddFullValidations', payload)
}
/**
 * Generador de propiesdes de los VModels creados en las interfaces de cada componente
 */
export function propertiesGenerator (props = [], { path, mut } = {}) {
  return props.reduce((obj, prop) => {
    obj[prop.property] = {
      get () {
        if (prop.oneKey && prop.twoKey && prop.threeKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey][prop.threeKey] ||
            prop.defaultValue
          if (prop.type === 'String') {
            return String(val)
          }
          if (prop.type === 'Number' && !Number.isNaN(Number(val))) {
            return Number(val)
          }
          return val
        }
        if (prop.oneKey && prop.twoKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey] ||
            prop.defaultValue
          if (prop.type === 'String') {
            return String(val)
          }
          if (prop.type === 'Number' && !Number.isNaN(Number(val))) {
            return Number(val)
          }
          return val
        }
        if (prop.oneKey) {
          const val = $nuxt.$store.state[path][prop.oneKey] || prop.defaultValue
          if (prop.type === 'String') {
            return String(val)
          }
          if (prop.type === 'Number' && !Number.isNaN(Number(val))) {
            return Number(val)
          }
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
/**
 * Función para colocar las propiedades de las interfaces utilizadas o implementadas por los componentes
 */
export function setProperty (state, data) {
  const oneKey = data.oneKey
  const twoKey = data.twoKey
  const threeKey = data.threeKey
  const type = data.type
  const upper = data.upper
  const lower = data.lower
  let customValue = data.value

  if (type === 'String') {
    customValue = String(customValue)
  } // Convertir a String
  if (upper) {
    customValue = customValue.toUpperCase()
  }
  if (lower) {
    customValue = customValue.toLowerCase()
  }

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

export function showOptionModal (title, key, state = false) {
  const keys = [
    'isFormTraining',
    'isShowTraining',
    'isFormUser',
    'isFormCitation',
    'isShowCitation',
    'isFormUploadDocument',
    'isShowCitationAssistance',
    'isFormSuitableCitation',
    'isFormSuitable',
    'isAptoCreate',
    'isFormSelection'
  ]
  upValStore('option', 'titleModal', title)
  upValStore('option', key, state)
  upValStore('option', 'isModal', state)
  keys.forEach((mod) => {
    if (mod !== key) {
      upValStore('option', mod, false)
    }
  })
}

/**
 * Valida el REGEX y si no es valido devuelve el valor anterior
 * @param {Regex} reg
 * @param {String | Number} input
 * @returns
 */
export function validateExpresion (reg, input) {
  input = String(input)
  const lastChart = input.slice(-1)
  if (!reg.test(lastChart) || !input) {
    return input.slice(0, -1)
  }
  return input
}

/**
 *
 * @param {String} mod
 * @param {String} object
 * @param {String} key
 * @param {Any} value
 */
export function upObjStore (mod, object, key, value) {
  const payload = { object, key, value }
  $nuxt.$store.dispatch(`${mod}/actUpdateKey`, payload)
  addFullValidation(null)
}

export function customBaseURL (endpoint) {
  const route = $nuxt.context.route
  const store = $nuxt.$store
  if (endpoint) {
    $nuxt.$api.setBaseURL(endpoint)
    console.log(`Custom ${endpoint} (Service)`)
  }
  if (!endpoint) {
    setEndpoint(route, store)
  }
}

export function setLogin (subCampaign = null, token = null, user = null) {
  if (subCampaign) {
    upObjStore('auth', subCampaign, 'token', token)
    upObjStore('auth', subCampaign, 'isLoggedIn', !!token)
  } else {
    $nuxt.$store.dispatch('auth/resetAuthState')
  }

  upValStore('app', 'user', user)
}

export function validateAccess (user, rolesAccess = []) {
  const roles = (user.userRol || []).map(role =>
    role.rol.name.toLowerCase().replaceAll(' ', '')
  )
  if (roles.includes('admin')) {
    return true
  }

  for (let index = 0; index < rolesAccess.length; index++) {
    const access = roles.includes(
      rolesAccess[index].toLowerCase().replaceAll(' ', '')
    )
    if (access) {
      return true
    }
  }

  return false
}

export function upValStoreRender (store, mod, key, value) {
  const payload = { key, value }
  store.dispatch(`${mod}/actUpdateValue`, payload)
}

export function setModule (store, moduleName) {
  const modules = [{ name: 'admin', key: 'isAdmin' }]

  const keyUpdate = modules.find(f => f.name === moduleName)

  upValStoreRender(store, 'app', keyUpdate.key, true)

  modules.forEach((mod) => {
    if (mod.name !== moduleName) {
      upValStoreRender(store, 'app', mod.key, false)
    }
  })
}

export function updateSession (store, isAdmin, route) {
  // const routesSale = ['citations']
  const routesAdmin = ['sale-login', 'sale-create']

  // for (let index = 0; index < routesSale.length; index++) {
  //   if (routesSale.includes(route)) {
  //     setModule(store, 'admin')
  //     console.log('Admin Sale', process.env.BACKEND_API_URL, '( service )')
  //     return process.env.BACKEND_API_URL
  //   }
  // }
  if (isAdmin || routesAdmin.includes(route)) {
    setModule(store, 'admin')
    console.log('Admin', process.env.BACKEND_API_URL, '( service )')
    return process.env.BACKEND_API_URL
  }
}

export function setEndpoint (route, store) {
  const displayRoute = route.name.toLowerCase()
  const isAdmin = displayRoute.includes('admin')

  const endpoint = updateSession(store, isAdmin, displayRoute)
  $nuxt.$api.setBaseURL(endpoint)
}

export function toCamelCase (text = '') {
  text = String(text)
  return text.substr(0, 1).toUpperCase() + text.toLowerCase().substr(1)
}

export function separatorNumber (number) {
  number = String(number).replace(/\D/g, '')
  return number === '' ? '' : Number(number).toLocaleString()
}

/**
 *
 * @param {String} modules
 */
export function clearStore (modules = 'all') {
  const clears = storeConfig[`CLEAR_MODULES_${modules.toUpperCase()}`]

  for (let i = 0; i < clears.length; i++) {
    $nuxt.$store.dispatch(clears[i])
  }
}
export function logout () {
  upValStore('app', 'isPosting', true)
  clearStore('all')
  window.location = '/'
}

export function doCopy (message) {
  $nuxt.$copyText(message).then(
    function (e) {
      console.log(e, 'Copy Success')
    },
    function (e) {
      console.log(e, 'Copy Error')
    }
  )
}
