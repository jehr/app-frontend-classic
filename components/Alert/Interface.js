export const Alert = {
  state: false,
  message: null,
  type: null
}

export const VModel = [
  {
    property: 'appAlert',
    oneKey: 'alert',
    defaultValue: { ...Alert }
  },
  {
    property: 'appAlertState',
    oneKey: 'alert',
    twoKey: 'state',
    defaultValue: Alert.state
  },
  {
    property: 'appAlertMessage',
    oneKey: 'alert',
    twoKey: 'message',
    defaultValue: Alert.message
  },
  {
    property: 'appAlertType',
    oneKey: 'alert',
    twoKey: 'type',
    defaultValue: Alert.type
  }
]
