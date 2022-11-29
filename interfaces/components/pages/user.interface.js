export const User = {
    id: '',
    document: '',
    fullName: '',
    phone1: '',
    phone2: '',
    email: '',
    status: true,
    passWord: '',
    login: '',
  }
  
  export const VModelUser = [
    {
      property: 'userItem',
      oneKey: 'editedUser',
      defaultValue: { ...User }
    },
    {
      property: 'userItemId',
      oneKey: 'editedUser',
      twoKey: 'id',
      defaultValue: User.id
    },
    {
      property: 'userItemDocument',
      oneKey: 'editedUser',
      twoKey: 'document',
      defaultValue: User.document,
      upper: true
    },
    {
      property: 'userItemFullName',
      oneKey: 'editedUser',
      twoKey: 'fullName',
      defaultValue: User.fullName,
      upper: true
    },
    {
      property: 'userItemPhone1',
      oneKey: 'editedUser',
      twoKey: 'phone1',
      defaultValue: User.phone1
    },
    {
      property: 'userItemPhone2',
      oneKey: 'editedUser',
      twoKey: 'phone2',
      defaultValue: User.phone2
    },
    {
      property: 'userItemEmail',
      oneKey: 'editedUser',
      twoKey: 'email',
      defaultValue: User.email,
      upper: true
    },
    {
      property: 'userItemPassWord',
      oneKey: 'editedUser',
      twoKey: 'passWord',
      defaultValue: User.passWord,
      upper: true
    },
    {
      property: 'userItemLogin',
      oneKey: 'editedUser',
      twoKey: 'login',
      defaultValue: User.login
    }
  ]
  
  export const VModelUserSearchStore = [
    {
      property: 'isFilter',
      oneKey: 'isUserFilter',
      defaultValue: false
    },
    {
      property: 'search',
      oneKey: 'userFilters',
      twoKey: 'search',
      defaultValue: '',
      upper: true
    },
    {
      property: 'fullName',
      oneKey: 'userFilters',
      twoKey: 'fullName',
      defaultValue: User.fullName,
      upper: true
    }
  ]
  
  // Methods
  export const user = {
    action: (user) => {
      $nuxt.$store.commit('user/updateValue', {
        key: 'item',
        value: { ...user }
      })
    },
  
    set: (user) => {
      user.action({ ...user })
    },
  
    resetItem: () => {
      user.action({ ...User })
    },
  
    clearPayload: (payload) => {
      const omit = []
  
      for (const key in payload) {
        if (User[key] === undefined || omit.includes(key)) {
          delete payload[key]
        }
      }
  
      return payload
    }
  }
  