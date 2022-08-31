// Service API
import * as serviceAPI from '~/services/api'

/**
 * Envia la petición para CREAR o ACTUALIZAR una formación
 * @param {Object} inputData
 */
export function createOrUpdateTraining (inputData) {
  console.log(inputData)
  if (inputData.id) {
    serviceAPI.handleUpdateTraining(inputData, inputData.id)
  } else {
    serviceAPI.handleCreateTraining(inputData)
  }
}
