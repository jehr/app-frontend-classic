export const AspirantFile = {
  sideA: '',
  sideB: ''
}

export const VModelAspirantFile = [
  {
    property: 'AspirantFileItem',
    oneKey: 'editedAspirantFile',
    defaultValue: { ...AspirantFile }
  },
  {
    property: 'AspirantFileItemSideA',
    oneKey: 'editedAspirantFile',
    twoKey: 'sideA',
    defaultValue: AspirantFile.sideA
  },
  {
    property: 'AspirantFileItemSideB',
    oneKey: 'editedAspirantFile',
    twoKey: 'sideB',
    defaultValue: AspirantFile.sideB
  }
]
