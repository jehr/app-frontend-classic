// Model
export const Loader = {
  message: 'Cargando... por favor espere',
  active: false
}

// VModel
export const VModelLoader = [
  {
    property: 'appLoaderMessage',
    path: ['loader', 'message'],
    defaultValue: Loader.message
  },
  {
    property: 'appLoaderActive',
    path: ['loader', 'active'],
    defaultValue: Loader.active
  }
]

// Methods
export const loader = {
  action: (inputLoader) => {
    $nuxt.$store.commit('app/updateValue', {
      key: 'loader',
      value: { ...inputLoader }
    })
  },

  show: (message) => {
    loader.action({ message, active: true })
  },

  close: () => {
    loader.action({ ...Loader })
  }
}
