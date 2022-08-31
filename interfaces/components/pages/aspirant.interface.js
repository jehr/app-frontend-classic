export const Aspirant = {
  document: '',
  typeDocument: '',
  firstName: '',
  secondName: '',
  firstSurName: '',
  secondSurName: '',
  fullName: '',
  dateOfBirth: '',
  cityDateOfBirth: '',
  stateDateOfBirth: '',
  countryDateOfBirth: '',
  height: '',
  gender: '',
  bloodGroup: '',
  dateOfIssue: '',
  cityDateOfIssue: ''
}

export const VModelAspirant = [
  {
    property: 'AspirantItem',
    oneKey: 'editedAspirant',
    defaultValue: { ...Aspirant }
  },
  {
    property: 'AspirantItemDocument',
    oneKey: 'editedAspirant',
    twoKey: 'document',
    defaultValue: Aspirant.document
  },
  {
    property: 'AspirantItemTypeDocument',
    oneKey: 'editedAspirant',
    twoKey: 'typeDocument',
    defaultValue: Aspirant.typeDocument
  },
  {
    property: 'AspirantItemFirstName',
    oneKey: 'editedAspirant',
    twoKey: 'firstName',
    defaultValue: Aspirant.firstName
  },
  {
    property: 'AspirantItemSecondName',
    oneKey: 'editedAspirant',
    twoKey: 'secondName',
    defaultValue: Aspirant.secondName
  },
  {
    property: 'AspirantItemFirstSurName',
    oneKey: 'editedAspirant',
    twoKey: 'firstSurName',
    defaultValue: Aspirant.firstSurName
  },
  {
    property: 'AspirantItemSecondSurName',
    oneKey: 'editedAspirant',
    twoKey: 'secondSurName',
    defaultValue: Aspirant.secondSurName
  },
  {
    property: 'AspirantItemFullName',
    oneKey: 'editedAspirant',
    twoKey: 'fullName',
    defaultValue: Aspirant.fullName
  },
  {
    property: 'AspirantItemDateOfBirth',
    oneKey: 'editedAspirant',
    twoKey: 'dateOfBirth',
    defaultValue: Aspirant.dateOfBirth
  },
  {
    property: 'AspirantItemCityDateOfBirth',
    oneKey: 'editedAspirant',
    twoKey: 'cityDateOfBirth',
    defaultValue: Aspirant.cityDateOfBirth
  },
  {
    property: 'AspirantItemStateDateOfBirth',
    oneKey: 'editedAspirant',
    twoKey: 'stateDateOfBirth',
    defaultValue: Aspirant.stateDateOfBirth
  },
  {
    property: 'AspirantItemCountryDateOfBirth',
    oneKey: 'editedAspirant',
    twoKey: 'countryDateOfBirth',
    defaultValue: Aspirant.countryDateOfBirth
  },
  {
    property: 'AspirantItemHeight',
    oneKey: 'editedAspirant',
    twoKey: 'height',
    defaultValue: Aspirant.height
  },
  {
    property: 'AspirantItemGender',
    oneKey: 'editedAspirant',
    twoKey: 'gender',
    defaultValue: Aspirant.gender
  },
  {
    property: 'AspirantItemBloodGroup',
    oneKey: 'editedAspirant',
    twoKey: 'bloodGroup',
    defaultValue: Aspirant.bloodGroup
  },
  {
    property: 'AspirantItemDateOfIssue',
    oneKey: 'editedAspirant',
    twoKey: 'dateOfIssue',
    defaultValue: Aspirant.dateOfIssue
  },
  {
    property: 'AspirantItemCityDateOfIssue',
    oneKey: 'editedAspirant',
    twoKey: 'cityDateOfIssue',
    defaultValue: Aspirant.cityDateOfIssue
  }
]
