export const SuitableCitation = {
  id: '',
  citationId: '',
  document: '',
  dateOfIssue: '',
  dateOfIssueText: '',
  stateOfIssue: '',
  firstName: '',
  secondName: '',
  firstSurname: '',
  secondSurname: '',
  email: '',
  gender: '',
  phone_1: '',
  phone_2: '',
  phoneWhatsapp: '',
  address: '',
  eps: '',
  campaignName: '',
  dateOfCitation: '',
  hourOfCitation: '',
  qualifyingDate: '',
  qualifiedById: '',
  cityDateOfIssue: '',
  experience: 0,
  loadId: '',
  observation: '',
  rDate: '',
  recruitmentId: '',
  serviceId: '',
  cited: '',
  interestedType: '',
  observationNotSuitable: '',
  levelOfStudies: '',
  dateOfBirth: '',
  dateOfBirthText: '',
  countryOfBirthId: '',
  stateOfBirthId: '',
  cityOfBirthId: '',
  documentTypeId: '',
  district: '',
  bloodGroup: ''
  // hourOfSuitableCitation: '',
  // dateOfSuitableCitation: ''
}

export const VModelSuitableCitation = [
  {
    property: 'suitableCitationItem',
    oneKey: 'editedSuitableCitation',
    defaultValue: { ...SuitableCitation }
  },
  {
    property: 'suitableCitationItemId',
    oneKey: 'editedSuitableCitation',
    twoKey: 'id',
    defaultValue: SuitableCitation.id
  },
  {
    property: 'suitableCitationItemCitationId',
    oneKey: 'editedSuitableCitation',
    twoKey: 'citationId',
    defaultValue: SuitableCitation.citationId
  },
  {
    property: 'suitableCitationItemDocument',
    oneKey: 'editedSuitableCitation',
    twoKey: 'document',
    defaultValue: SuitableCitation.document
  },
  {
    property: 'suitableCitationItemDateOfExpedition',
    oneKey: 'editedSuitableCitation',
    twoKey: 'dateOfIssue',
    defaultValue: SuitableCitation.dateOfIssue
  },
  {
    property: 'suitableCitationItemDateOfExpeditionText',
    oneKey: 'editedSuitableCitation',
    twoKey: 'dateOfIssueText',
    defaultValue: SuitableCitation.dateOfIssueText
  },
  {
    property: 'suitableCitationItemDepartmentOfExpedition',
    oneKey: 'editedSuitableCitation',
    twoKey: 'stateOfIssue',
    defaultValue: SuitableCitation.stateOfIssue
  },
  {
    property: 'suitableCitationItemFirstName',
    oneKey: 'editedSuitableCitation',
    twoKey: 'firstName',
    defaultValue: SuitableCitation.firstName
  },
  {
    property: 'suitableCitationItemSecondName',
    oneKey: 'editedSuitableCitation',
    twoKey: 'secondName',
    defaultValue: SuitableCitation.secondName
  },
  {
    property: 'suitableCitationItemFirstSurname',
    oneKey: 'editedSuitableCitation',
    twoKey: 'firstSurname',
    defaultValue: SuitableCitation.firstSurname
  },
  {
    property: 'suitableCitationItemSecondSurname',
    oneKey: 'editedSuitableCitation',
    twoKey: 'secondSurname',
    defaultValue: SuitableCitation.secondSurname
  },
  {
    property: 'suitableCitationItemEmail',
    oneKey: 'editedSuitableCitation',
    twoKey: 'email',
    defaultValue: SuitableCitation.email
  },
  {
    property: 'suitableCitationItemPhone_1',
    oneKey: 'editedSuitableCitation',
    twoKey: 'phone_1',
    defaultValue: SuitableCitation.phone_1
  },
  {
    property: 'suitableCitationItemPhone_2',
    oneKey: 'editedSuitableCitation',
    twoKey: 'phone_2',
    defaultValue: SuitableCitation.phone_2
  },
  {
    property: 'suitableCitationItemPhoneWhatsApp',
    oneKey: 'editedSuitableCitation',
    twoKey: 'phoneWhatsapp',
    defaultValue: SuitableCitation.phoneWhatsapp
  },
  {
    property: 'suitableCitationItemAddress',
    oneKey: 'editedSuitableCitation',
    twoKey: 'address',
    defaultValue: SuitableCitation.address
  },
  {
    property: 'suitableCitationItemEPS',
    oneKey: 'editedSuitableCitation',
    twoKey: 'eps',
    defaultValue: SuitableCitation.eps
  },
  {
    property: 'suitableCitationItemCampaignName',
    oneKey: 'editedSuitableCitation',
    twoKey: 'campaignName',
    defaultValue: SuitableCitation.campaignName
  },
  {
    property: 'suitableCitationItemLevelOfStudies',
    oneKey: 'editedSuitableCitation',
    twoKey: 'levelOfStudies',
    defaultValue: SuitableCitation.levelOfStudies
  },
  {
    property: 'suitableCitationItemDateOfBirth',
    oneKey: 'editedSuitableCitation',
    twoKey: 'dateOfBirth',
    defaultValue: SuitableCitation.dateOfBirth
  },
  {
    property: 'suitableCitationItemDateOfBirthText',
    oneKey: 'editedSuitableCitation',
    twoKey: 'dateOfBirthText',
    defaultValue: SuitableCitation.dateOfBirthText
  },
  {
    property: 'suitableCitationItemQualifyingDate',
    oneKey: 'editedSuitableCitation',
    twoKey: 'qualifyingDate',
    defaultValue: SuitableCitation.qualifyingDate
  },
  {
    property: 'suitableCitationItemCountryOfBirth',
    oneKey: 'editedSuitableCitation',
    twoKey: 'countryOfBirthId',
    defaultValue: SuitableCitation.countryOfBirthId
  },
  {
    property: 'suitableCitationItemStateOfBirth',
    oneKey: 'editedSuitableCitation',
    twoKey: 'stateOfBirthId',
    defaultValue: SuitableCitation.stateOfBirthId
  },
  {
    property: 'suitableCitationItemCityOfBirthId',
    oneKey: 'editedSuitableCitation',
    twoKey: 'cityOfBirthId',
    defaultValue: SuitableCitation.cityOfBirthId
  },
  {
    property: 'suitableCitationItemDocumentTypeId',
    oneKey: 'editedSuitableCitation',
    twoKey: 'documentTypeId',
    defaultValue: SuitableCitation.documentTypeId
  },
  {
    property: 'suitableCitationItemDistrict',
    oneKey: 'editedSuitableCitation',
    twoKey: 'district',
    defaultValue: SuitableCitation.district
  },
  {
    property: 'suitableCitationItemQualifiedById',
    oneKey: 'editedSuitableCitation',
    twoKey: 'qualifiedById',
    defaultValue: SuitableCitation.qualifiedById
  },
  {
    property: 'suitableCitationItemExperience',
    oneKey: 'editedSuitableCitation',
    twoKey: 'experience',
    defaultValue: SuitableCitation.experience
  },
  {
    property: 'suitableCitationItemCityDateOfIssue',
    oneKey: 'editedSuitableCitation',
    twoKey: 'cityDateOfIssue',
    defaultValue: SuitableCitation.cityDateOfIssue
  },
  {
    property: 'suitableCitationItemLoadId',
    oneKey: 'editedSuitableCitation',
    twoKey: 'loadId',
    defaultValue: SuitableCitation.loadId
  },
  {
    property: 'suitableCitationItemObservation',
    oneKey: 'editedSuitableCitation',
    twoKey: 'observation',
    defaultValue: SuitableCitation.observation
  },
  {
    property: 'suitableCitationItemRDate',
    oneKey: 'editedSuitableCitation',
    twoKey: 'rDate',
    defaultValue: SuitableCitation.rDate
  },
  {
    property: 'suitableCitationItemRecruitmentId',
    oneKey: 'editedSuitableCitation',
    twoKey: 'recruitmentId',
    defaultValue: SuitableCitation.recruitmentId
  },
  {
    property: 'suitableCitationItemServiceId',
    oneKey: 'editedSuitableCitation',
    twoKey: 'serviceId',
    defaultValue: SuitableCitation.serviceId
  },
  {
    property: 'suitableCitationItemCited',
    oneKey: 'editedSuitableCitation',
    twoKey: 'cited',
    defaultValue: SuitableCitation.cited
  },
  {
    property: 'suitableCitationItemInterestedType',
    oneKey: 'editedSuitableCitation',
    twoKey: 'interestedType',
    defaultValue: SuitableCitation.interestedType
  },
  {
    property: 'suitableCitationItemObservationNotSuitable',
    oneKey: 'editedSuitableCitation',
    twoKey: 'observationNotSuitable',
    defaultValue: SuitableCitation.observationNotSuitable
  },
  {
    property: 'suitableCitationItemGender',
    oneKey: 'editedSuitableCitation',
    twoKey: 'gender',
    defaultValue: SuitableCitation.gender
  },
  {
    property: 'suitableCitationItemBloodGroup',
    oneKey: 'editedSuitableCitation',
    twoKey: 'bloodGroup',
    defaultValue: SuitableCitation.bloodGroup
  }
]

// Methods
export const suitableCitation = {
  action: (suitableCitation) => {
    $nuxt.$store.commit('suitableCitation/updateValue', {
      key: 'item',
      value: { ...SuitableCitation }
    })
  },

  set: (suitableCitation) => {
    suitableCitation.action({ ...SuitableCitation })
  },

  resetItem: () => {
    suitableCitation.action({ ...SuitableCitation })
  },

  refresh: (loading) => {
    $nuxt.$emit('refresh-suitableCitations', { loading })
  },

  clearPayload: (payload) => {
    const omit = [
      'id',
      'qualifyingDate',
      'qualifiedById',
      'observationNotSuitable'
    ]

    for (const key in payload) {
      if (SuitableCitation[key] === undefined || omit.includes(key)) {
        delete payload[key]
      }
    }

    return payload
  }
}
