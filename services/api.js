import { openAlert, showOptionModal, upValStore } from '@/plugins/helpers'

/**
 * Service post, for register in users access control
 */
export const handleCreateSurvey = async (payload) => {
  try {
    const data = await $nuxt.$axios.post('surveys', payload)
    upValStore('app', 'isPosting', false)
    openAlert('success', 'se ha registrado la encuesta correctamente.')
    return data
  } catch (error) {
    openAlert('warning', 'El usuario ya ha realizado una encuenta en este día.')
  }
}

export const handleCreateSuggestions = async (payload) => {
  try {
    const data = await $nuxt.$axios.post('pqrs', payload)
    upValStore('app', 'isPosting', false)
    openAlert(
      'success',
      'se ha registrado la sugerencia, nos estaremos comunicando contigo'
    )
    return data
  } catch (error) {
    openAlert('error', error + '')
  }
}

export async function handleGetTraining () {
  const data = await $nuxt.$api.$get('formacions')
  if (data) {
    return data
  }
}

/**
 * Elimina una formación
 * @param {Number} id
 */
export async function handleDeleteTraining (id) {
  const data = await $nuxt.$api.$delete(`formacions/${id}`)

  if (data) {
    $nuxt.refresh()
    showOptionModal('isFormTraining')
    setTimeout(() => {
      openAlert('success', 'Se eliminó la formación correctamente!')
    }, 1000)
  }
}

/**
 * crea una formación
 * @param {Number} id
 */
export async function handleCreateTraining (payload) {
  const data = await $nuxt.$api.$post('formacions', payload)

  if (data) {
    $nuxt.refresh()
    showOptionModal('isFormTraining')
    setTimeout(() => {
      openAlert(
        'success',
        'Se creo la formación correctamente, con el ID: ' + data.id
      )
    }, 1000)
  }
}

export async function handleUpdateTraining (payload, id) {
  const data = await $nuxt.$api.$put(`formacions/${id}`, payload)

  if (data) {
    $nuxt.refresh()
    showOptionModal('isFormTraining')
    setTimeout(() => {
      openAlert('info', 'Se actualizó la formación correctamente!')
    }, 1000)
  }
}
