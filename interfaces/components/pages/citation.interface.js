export const Citation = {
  id: '',
  document: '',
  fullName: '',
  phone_1: '',
  campaignName: '',
  interestedType: '',
  dateOfCitation: '',
  hourOfCitation: '',
  tipification: '',
  observation: '',
  observationNotSuitable: '',
  reasonType: '',
  typificationId: ''
}

export const VModelCitation = [
  {
    property: 'citationItem',
    oneKey: 'editedCitation',
    defaultValue: { ...Citation }
  },
  {
    property: 'citationItemId',
    oneKey: 'editedCitation',
    twoKey: 'id',
    defaultValue: Citation.id
  },
  {
    property: 'citationItemDocument',
    oneKey: 'editedCitation',
    twoKey: 'document',
    defaultValue: Citation.document,
    upper: true
  },
  {
    property: 'citationItemFullName',
    oneKey: 'editedCitation',
    twoKey: 'fullName',
    defaultValue: Citation.fullName,
    upper: true
  },
  {
    property: 'citationItemPhone1',
    oneKey: 'editedCitation',
    twoKey: 'phone_1',
    defaultValue: Citation.phone_1
  },
  {
    property: 'citationItemCampaignName',
    oneKey: 'editedCitation',
    twoKey: 'campaignName',
    defaultValue: Citation.campaignName,
    upper: true
  },
  {
    property: 'citationItemInterestedType',
    oneKey: 'editedCitation',
    twoKey: 'interestedType',
    defaultValue: Citation.interestedType,
    upper: true
  },
  {
    property: 'citationItemDateCitation',
    oneKey: 'editedCitation',
    twoKey: 'dateOfCitation',
    defaultValue: Citation.dateOfCitation
  },
  {
    property: 'citationItemHourCitation',
    oneKey: 'editedCitation',
    twoKey: 'hourOfCitation',
    defaultValue: Citation.hourOfCitation
  },
  {
    property: 'citationItemTipification',
    oneKey: 'editedCitation',
    twoKey: 'tipification',
    defaultValue: Citation.tipification
  },
  {
    property: 'citationItemObservation',
    oneKey: 'editedCitation',
    twoKey: 'observation',
    defaultValue: Citation.observation,
    upper: true
  },
  {
    property: 'citationItemObservationNotSuitable',
    oneKey: 'editedCitation',
    twoKey: 'observationNotSuitable',
    defaultValue: Citation.observationNotSuitable,
    upper: true
  },
  {
    property: 'citationItemReasonType',
    oneKey: 'editedCitation',
    twoKey: 'reasonType',
    defaultValue: Citation.reasonType,
    upper: true
  },
  {
    property: 'citationItemTypificationId',
    oneKey: 'editedCitation',
    twoKey: 'typificationId',
    defaultValue: Citation.typificationId
  }
]

export const VModelCitationSearchStore = [
  {
    property: 'isFilter',
    oneKey: 'isCitationFilter',
    defaultValue: false
  },
  {
    property: 'search',
    oneKey: 'citationFilters',
    twoKey: 'search',
    defaultValue: '',
    upper: true
  },
  {
    property: 'fullName',
    oneKey: 'citationFilters',
    twoKey: 'fullName',
    defaultValue: Citation.fullName,
    upper: true
  }
]

// Methods
export const citation = {
  action: (citation) => {
    $nuxt.$store.commit('citation/updateValue', {
      key: 'item',
      value: { ...citation }
    })
  },

  set: (citation) => {
    citation.action({ ...citation })
  },

  resetItem: () => {
    citation.action({ ...Citation })
  },

  clearPayload: (payload) => {
    const omit = []

    for (const key in payload) {
      if (Citation[key] === undefined || omit.includes(key)) {
        delete payload[key]
      }
    }

    return payload
  }
}
