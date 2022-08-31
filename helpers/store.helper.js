export const updateKey = (state, data) => {
  state[data.object][data.key] = data.value
}

export const updateValue = (state, data) => {
  state[data.key] = data.value
}

/**
 * SET property in module STORE
 * @param {Object} state
 * @param {Object} data
 */
export const setProperty = (state, data) => {
  const value = data.value
  const path = data.path

  /* Set FOUR key in object */
  if (path[0] && path[1] && path[2] && path[3]) {
    state[path[0]][path[1]][path[2]][path[3]] = value
    return
  }

  /* Set THREE key in object */
  if (path[0] && path[1] && path[2]) {
    state[path[0]][path[1]][path[2]] = value
    return
  }

  /* Set TWO key in object */
  if (path[0] && path[1]) {
    state[path[0]][path[1]] = value
    return
  }

  /* Set ONE key in object */
  if (path[0]) {
    state[path[0]] = value
  }
}

/**
 * Generate Model with properties in Store
 * @param {Array} props
 * @param {Object} { path, mut}
 * @return {Object}
 */
export const modelGenerator = (props = [], { path, mut } = {}) => {
  return props.reduce((obj, prop) => {
    const oneKey = prop.oneKey
    const twoKey = prop.twoKey
    const threeKey = prop.threeKey
    const fourKey = prop.fourKey
    const defaultValue = prop.defaultValue

    obj[prop.property] = {
      get () {
        if (oneKey && twoKey && threeKey && fourKey) {
          return (
            $nuxt.$store.state[path][oneKey][twoKey][threeKey] || defaultValue
          )
        }
        if (oneKey && twoKey && threeKey) {
          return (
            $nuxt.$store.state[path][oneKey][twoKey][threeKey] || defaultValue
          )
        }
        if (oneKey && twoKey) {
          return $nuxt.$store.state[path][oneKey][twoKey] || defaultValue
        }
        if (oneKey) {
          return $nuxt.$store.state[path][oneKey] || defaultValue
        }

        return null
      },
      set (value) {
        $nuxt.$store.commit(mut, {
          oneKey,
          twoKey,
          threeKey,
          fourKey,
          value
        })
      }
    }
    return obj
  }, {})
}
