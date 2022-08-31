// Model
export const Toast = {
  icon: 'mdi-help-circle',
  color: 'error',
  message: 'Upss!! lo sentimos ocurrió un error inesperado',
  active: false
}

// VModel
export const VModelToast = [
  {
    property: 'appToastIcon',
    oneKey: 'toast',
    twoKey: 'icon',
    defaultValue: Toast.icon
  },
  {
    property: 'appToastColor',
    oneKey: 'toast',
    twoKey: 'color',
    defaultValue: Toast.color
  },
  {
    property: 'appToastMessage',
    oneKey: 'toast',
    twoKey: 'message',
    defaultValue: Toast.message
  },
  {
    property: 'appToastActive',
    oneKey: 'toast',
    twoKey: 'active',
    defaultValue: Toast.active
  }
]

// Types
export const toastTypes = {
  success: {
    icon: 'mdi-check-circle',
    color: 'success'
  },
  error: {
    icon: 'mdi-alert-circle',
    color: 'error'
  },
  info: {
    icon: 'mdi-information',
    color: 'blue'
  },
  warning: {
    icon: 'mdi-alert',
    color: 'warning'
  }
}

// Methods
export const toast = {
  action: (inputToast) => {
    $nuxt.$store.commit('app/updateValue', {
      key: 'toast',
      value: { ...inputToast }
    })
  },

  show: (type, message) => {
    const toastType = toastTypes[type]
    if (toastType) {
      toast.action({ ...toastType, message, active: true })
    }
  },

  close: () => {
    toast.action({ ...Toast })
  }
}
