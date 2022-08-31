export const Selection = {
  id: '',
  document: '',
  firstName: '',
  secondName: '',
  firstSurname: '',
  secondSurname: '',
  dateOfBirth: '',
  gender: '',
  dateOfIssue: '',
  address: '',
  district: '',
  phone_1: '',
  phone_2: '',
  phoneWhatsapp: '',
  email: '',
  civilStatus: '',
  spouseName: '',
  occupation: '',
  eps: '',
  afp: '',
  documentTypeId: '',
  trainingCodeId: 0,
  cityId: '',
  stateId: '',
  userId: '',
  numberOfPeople: 0,
  hasChildren: false,
  numberOfChildren: 0,
  childrenFamilyEnvironments: [],
  hasPeopleWhoAreEconomicallyDependent: false,
  numberPeopleWhoAreEconomicallyDependent: 0,
  peopleWhoAreEconomicallyDependent: '',
  typeOfHousing: '',
  stratum: 0,
  levelOfStudy: '',
  yearLevelOfStudies: 0,
  currentlyStudying: null,
  journey: '',
  nameCareerStudyAndHours: '',
  complementaryCourses: '',
  officeKnowledges: [],
  otherLanguage: null,
  nameLanguage: '',
  levelLanguage: '',
  handlingOfOtherTools: '',
  callCenterExperiences: [
    {
      id: 0,
      name: '',
      status: true,
      time: '',
      aspirantId: 0
    }
  ],
  departmentExperiences: [
    {
      id: 0,
      name: '',
      time: '',
      company: '',
      aspirantId: 0
    }
  ],
  companyExperiences: [
    {
      id: 0,
      name: '',
      job: '',
      campaign: '',
      reasonForWithdrawal: '',
      startDate: '',
      endDate: '',
      immediateChiefName: '',
      phoneImmediateChief: '',
      totalTimeInCompany: '',
      observation: '',
      aspirantId: 0
    }
  ],
  smoke: true,
  totalCigarettes: 0,
  alcoholFrequency: '',
  health: '',
  suffersfromSomeDisease: true,
  diseaseName: '',
  usesMedicines: true,
  medicinesName: '',
  familyHealthHistory: true,
  familyHealthHistoryName: '',
  medicalHistories: [
    {
      id: 0,
      name: '',
      status: true,
      description: '',
      aspirantId: 0
    }
  ],
  reasonsForBeingElected: '',
  contributionToUno27: '',
  observation: ''
}

export const VModelSelection = [
  {
    property: 'selectionItem',
    oneKey: 'editedSelection',
    defaultValue: { ...Selection }
  },
  {
    property: 'selectionItemId',
    oneKey: 'editedSelection',
    twoKey: 'id',
    defaultValue: Selection.id
  },
  {
    property: 'selectionItemDocument',
    oneKey: 'editedSelection',
    twoKey: 'document',
    defaultValue: Selection.document
  },
  {
    property: 'selectionItemFirstName',
    oneKey: 'editedSelection',
    twoKey: 'firstName',
    defaultValue: Selection.firstName
  },
  {
    property: 'selectionItemSecondName',
    oneKey: 'editedSelection',
    twoKey: 'secondName',
    defaultValue: Selection.secondName
  },
  {
    property: 'selectionItemFirstSurname',
    oneKey: 'editedSelection',
    twoKey: 'firstSurname',
    defaultValue: Selection.firstSurname
  },
  {
    property: 'selectionItemSecondSurname',
    oneKey: 'editedSelection',
    twoKey: 'secondSurname',
    defaultValue: Selection.secondSurname
  },
  {
    property: 'selectionItemDateOfBirth',
    oneKey: 'editedSelection',
    twoKey: 'dateOfBirth',
    defaultValue: Selection.dateOfBirth
  },
  {
    property: 'selectionItemGender',
    oneKey: 'editedSelection',
    twoKey: 'gender',
    defaultValue: Selection.gender
  },
  {
    property: 'selectionItemDateOfIssue',
    oneKey: 'editedSelection',
    twoKey: 'dateOfIssue',
    defaultValue: Selection.dateOfIssue
  },
  {
    property: 'selectionItemAddress',
    oneKey: 'editedSelection',
    twoKey: 'address',
    defaultValue: Selection.address
  },
  {
    property: 'selectionItemDistrict',
    oneKey: 'editedSelection',
    twoKey: 'district',
    defaultValue: Selection.district
  },
  {
    property: 'selectionItemPhone_1',
    oneKey: 'editedSelection',
    twoKey: 'phone_1',
    defaultValue: Selection.phone_1
  },
  {
    property: 'selectionItemPhone_2',
    oneKey: 'editedSelection',
    twoKey: 'phone_2',
    defaultValue: Selection.phone_2
  },
  {
    property: 'selectionItemPhoneWhatsapp',
    oneKey: 'editedSelection',
    twoKey: 'phoneWhatsapp',
    defaultValue: Selection.phoneWhatsapp
  },
  {
    property: 'selectionItemEmail',
    oneKey: 'editedSelection',
    twoKey: 'email',
    defaultValue: Selection.email
  },
  {
    property: 'selectionItemCivilStatus',
    oneKey: 'editedSelection',
    twoKey: 'civilStatus',
    defaultValue: Selection.civilStatus
  },
  {
    property: 'selectionItemSpouseName',
    oneKey: 'editedSelection',
    twoKey: 'spouseName',
    defaultValue: Selection.spouseName
  },
  {
    property: 'selectionItemOccupation',
    oneKey: 'editedSelection',
    twoKey: 'occupation',
    defaultValue: Selection.occupation
  },
  {
    property: 'selectionItemEps',
    oneKey: 'editedSelection',
    twoKey: 'eps',
    defaultValue: Selection.eps
  },
  {
    property: 'selectionItemAfp',
    oneKey: 'editedSelection',
    twoKey: 'Afp',
    defaultValue: Selection.Afp
  },
  {
    property: 'selectionItemDocumentTypeId',
    oneKey: 'editedSelection',
    twoKey: 'documentTypeId',
    defaultValue: Selection.documentTypeId
  },
  {
    property: 'selectionItemTrainingCodeId',
    oneKey: 'editedSelection',
    twoKey: 'trainingCodeId',
    defaultValue: Selection.trainingCodeId
  },
  {
    property: 'selectionItemCityId',
    oneKey: 'editedSelection',
    twoKey: 'cityId',
    defaultValue: Selection.cityId
  },
  {
    property: 'selectionItemStateId',
    oneKey: 'editedSelection',
    twoKey: 'stateId',
    defaultValue: Selection.stateId
  },
  {
    property: 'selectionItemUserId',
    oneKey: 'editedSelection',
    twoKey: 'userId',
    defaultValue: Selection.userId
  },
  {
    property: 'selectionItemNumberOfPeople',
    oneKey: 'editedSelection',
    twoKey: 'numberOfPeople',
    defaultValue: Selection.numberOfPeople
  },
  {
    property: 'selectionItemHasChildren',
    oneKey: 'editedSelection',
    twoKey: 'hasChildren',
    defaultValue: Selection.hasChildren
  },
  {
    property: 'selectionItemNumberOfChildren',
    oneKey: 'editedSelection',
    twoKey: 'numberOfChildren',
    defaultValue: Selection.numberOfChildren
  },
  {
    property: 'selectionItemChildrenFamilyEnvironments',
    oneKey: 'editedSelection',
    twoKey: 'childrenFamilyEnvironments',
    defaultValue: Selection.childrenFamilyEnvironments
  },
  {
    property: 'selectionItemHasPeopleWhoAreEconomicallyDependent',
    oneKey: 'editedSelection',
    twoKey: 'hasPeopleWhoAreEconomicallyDependent',
    defaultValue: Selection.hasPeopleWhoAreEconomicallyDependent
  },
  {
    property: 'selectionItemNumberPeopleWhoAreEconomicallyDependent',
    oneKey: 'editedSelection',
    twoKey: 'numberPeopleWhoAreEconomicallyDependent',
    defaultValue: Selection.numberPeopleWhoAreEconomicallyDependent
  },
  {
    property: 'selectionItemPeopleWhoAreEconomicallyDependent',
    oneKey: 'editedSelection',
    twoKey: 'peopleWhoAreEconomicallyDependent',
    defaultValue: Selection.peopleWhoAreEconomicallyDependent
  },
  {
    property: 'selectionItemTypeOfHousing',
    oneKey: 'editedSelection',
    twoKey: 'typeOfHousing',
    defaultValue: Selection.typeOfHousing
  },
  {
    property: 'selectionItemStratum',
    oneKey: 'editedSelection',
    twoKey: 'stratum',
    defaultValue: Selection.stratum
  },
  {
    property: 'selectionItemLevelOfStudy',
    oneKey: 'editedSelection',
    twoKey: 'levelOfStudy',
    defaultValue: Selection.levelOfStudy
  },
  {
    property: 'selectionItemYearLevelOfStudies',
    oneKey: 'editedSelection',
    twoKey: 'yearLevelOfStudies',
    defaultValue: Selection.yearLevelOfStudies
  },
  {
    property: 'selectionItemCurrentlyStudying',
    oneKey: 'editedSelection',
    twoKey: 'currentlyStudying',
    defaultValue: Selection.currentlyStudying
  },
  {
    property: 'selectionItemJourney',
    oneKey: 'editedSelection',
    twoKey: 'journey',
    defaultValue: Selection.journey
  },
  {
    property: 'selectionItemNameCareerStudyAndHours',
    oneKey: 'editedSelection',
    twoKey: 'nameCareerStudyAndHours',
    defaultValue: Selection.nameCareerStudyAndHours
  },
  {
    property: 'selectionItemComplementaryCourses',
    oneKey: 'editedSelection',
    twoKey: 'complementaryCourses',
    defaultValue: Selection.complementaryCourses
  },
  {
    property: 'selectionItemOfficeKnowledges',
    oneKey: 'editedSelection',
    twoKey: 'officeKnowledges',
    defaultValue: Selection.officeKnowledges
  },
  {
    property: 'selectionItemOtherLanguage',
    oneKey: 'editedSelection',
    twoKey: 'otherLanguage',
    defaultValue: Selection.otherLanguage
  },
  {
    property: 'selectionItemNameLanguage',
    oneKey: 'editedSelection',
    twoKey: 'nameLanguage',
    defaultValue: Selection.nameLanguage
  },
  {
    property: 'selectionItemLevelLanguage',
    oneKey: 'editedSelection',
    twoKey: 'levelLanguage',
    defaultValue: Selection.levelLanguage
  },
  {
    property: 'selectionItemNameLanguage',
    oneKey: 'editedSelection',
    twoKey: 'nameLanguage',
    defaultValue: Selection.nameLanguage
  },
  {
    property: 'selectionItemHandlingOfOtherTools',
    oneKey: 'editedSelection',
    twoKey: 'handlingOfOtherTools',
    defaultValue: Selection.handlingOfOtherTools
  },
  {
    property: 'selectionItemSmoke',
    oneKey: 'editedSelection',
    twoKey: 'smoke',
    defaultValue: Selection.smoke
  },
  {
    property: 'selectionItemTotalCigarettes',
    oneKey: 'editedSelection',
    twoKey: 'totalCigarettes',
    defaultValue: Selection.totalCigarettes
  },
  {
    property: 'selectionItemAlcoholFrequency',
    oneKey: 'editedSelection',
    twoKey: 'alcoholFrequency',
    defaultValue: Selection.alcoholFrequency
  },
  {
    property: 'selectionItemHealth',
    oneKey: 'editedSelection',
    twoKey: 'health',
    defaultValue: Selection.health
  },
  {
    property: 'selectionItemSuffersfromSomeDisease',
    oneKey: 'editedSelection',
    twoKey: 'suffersfromSomeDisease',
    defaultValue: Selection.suffersfromSomeDisease
  },
  {
    property: 'selectionItemDiseaseName',
    oneKey: 'editedSelection',
    twoKey: 'diseaseName',
    defaultValue: Selection.diseaseName
  },
  {
    property: 'selectionItemUsesMedicines',
    oneKey: 'editedSelection',
    twoKey: 'usesMedicines',
    defaultValue: Selection.usesMedicines
  },
  {
    property: 'selectionItemMedicinesName',
    oneKey: 'editedSelection',
    twoKey: 'medicinesName',
    defaultValue: Selection.medicinesName
  },
  {
    property: 'selectionItemFamilyHealthHistory',
    oneKey: 'editedSelection',
    twoKey: 'familyHealthHistory',
    defaultValue: Selection.familyHealthHistory
  },
  {
    property: 'selectionItemFamilyHealthHistoryName',
    oneKey: 'editedSelection',
    twoKey: 'familyHealthHistoryName',
    defaultValue: Selection.familyHealthHistoryName
  },
  {
    property: 'selectionItemReasonsForBeingElected',
    oneKey: 'editedSelection',
    twoKey: 'reasonsForBeingElected',
    defaultValue: Selection.reasonsForBeingElected
  },
  {
    property: 'selectionItemContributionToUno27',
    oneKey: 'editedSelection',
    twoKey: 'contributionToUno27',
    defaultValue: Selection.contributionToUno27
  },
  {
    property: 'selectionItemObservation',
    oneKey: 'editedSelection',
    twoKey: 'observation',
    defaultValue: Selection.observation
  }
]

// Methods
export const selection = {
  action: (selection) => {
    $nuxt.$store.commit('selection/updateValue', {
      key: 'item',
      value: { ...selection }
    })
  },

  set: (selection) => {
    selection.action({ ...selection })
  },

  resetItem: () => {
    selection.action({ ...Selection })
  },

  refresh: (loading) => {
    $nuxt.$emit('refresh-selections', { loading })
  },

  clearPayload: (payload) => {
    const omit = []

    for (const key in payload) {
      if (selection[key] === undefined || omit.includes(key)) {
        delete payload[key]
      }
    }

    return payload
  }
}
