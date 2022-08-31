import { showOptionModal, upValStore } from '~/plugins/helpers'
import { Citation } from '~/interfaces/components/pages/citation.interface'
import { SuitableCitation } from '~/interfaces/components/pages/suitable-citation.interface'
import { Selection } from '~/interfaces/components/pages/selection.interface'
import { Aspirant } from '~/interfaces/components/pages/aspirant.interface'
import { AspirantController } from '~/controllers/aspirant.controller'

export function crudCreateOrUpdateCitation (citation) {
  const title = citation && citation.id ? 'Editar Citación' : 'Crear Citación'
  const customCitation = citation ? { ...citation } : { ...Citation }
  upValStore('citation', 'editedCitation', customCitation)
  showOptionModal(title, 'isFormCitation', true)
}

export function uploadIdentificationDocument (payload) {
  // console.log('uploadIdentificationDocument', payload)
  showOptionModal('Subir Documento', 'isFormUploadDocument', true)
}

export function crudCreatesuitableCitation (suitableCitation) {
  const title =
    suitableCitation && suitableCitation.id
      ? 'Editar Citación'
      : 'Crear Citación'
  const customSuitableCitation = suitableCitation
    ? { ...suitableCitation }
    : { ...SuitableCitation }
  upValStore(
    'suitableCitation',
    'editedSuitableCitation',
    customSuitableCitation
  )
  showOptionModal(title, 'isFormSuitableCitation', true)
}

export async function crudAptoCreateOrUpdate (payload) {
  const title = payload && payload.id ? 'Datos Basicos' : 'Crear Citación'
  // console.log(payload.id)

  let newCitationAspirant = { ...Aspirant }
  // Aspirant
  if (payload.document !== '') {
    const aspirant = await AspirantController.get.dataDocument(payload.document)

    const customAspirant = aspirant ? { ...aspirant } : { ...Aspirant }
    console.log('Document lector', aspirant)

    upValStore('aspirant', 'editedAspirant', customAspirant)
    // pass some data of aspirant to Suitable Citatio
    newCitationAspirant = {
      ...customAspirant,
      dateOfBirth:
        aspirant !== false
          ? convertDateForVue(customAspirant.dateOfBirth)
          : customAspirant.dateOfBirth,
      dateOfIssue:
        aspirant !== false
          ? convertDateForVue(customAspirant.dateOfIssue)
          : customAspirant.dateOfIssue,
      firstSurname: customAspirant.firstSurName,
      secondSurname: customAspirant.secondSurName,
      cityDateOfIssue: customAspirant.cityDateOfIssue,
      ...payload,
      stateOfIssue: customAspirant.cityDateOfIssue // cityDateOfIssue,
    }
  }

  // Suitable Citation
  const customSuitableCitation = newCitationAspirant
    ? { ...newCitationAspirant }
    : { ...SuitableCitation }

  upValStore(
    'suitableCitation',
    'editedSuitableCitation',
    customSuitableCitation
  )
  showOptionModal(title, 'isAptoCreate', true)
}

function convertDateForVue (date) {
  // convert date of dd/mm/yyyy to yyyy-mm-dd
  const dateArray = date.split('-')
  if (dateArray.length > 3) {
    const newDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
    return newDate
  }
  return date
}

export function updatesuitableCitation (data) {
  const title = 'Editar Citación Adecuada'
  // console.log('updatesuitableCitation', data)

  const customSuitableCitation = data ? { ...data } : { ...SuitableCitation }

  upValStore(
    'suitableCitation',
    'editedSuitableCitation',
    customSuitableCitation
  )
  showOptionModal(title, 'isFormSuitable', true)
}

export function crudShowCitation (citation) {
  const title = 'Detalle de la citación'
  upValStore('citation', 'editedCitation', citation)
  showOptionModal(title, 'isShowCitation', true)
}

export function showCitation (citation) {
  const title = 'Detalle citación no asiste'
  upValStore('citation', 'editedCitation', citation)
  showOptionModal(title, 'isShowCitationAssistance', true)
}

export function crudCreateOrUpdateSelection (selection) {
  const title =
    selection && selection.id ? 'Editar Selecciuón' : 'Crear Selección Personal'
  const customSelection = selection ? { ...selection } : { ...Selection }
  upValStore('selection', 'editedSelection', customSelection)
  showOptionModal(title, 'isFormSelection', true)
}
