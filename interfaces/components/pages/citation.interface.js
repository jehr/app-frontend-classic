export const Citation = {
  id: '',
  document: '',
  dateOfCitation: '',
  hourOfCitation: '',
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
