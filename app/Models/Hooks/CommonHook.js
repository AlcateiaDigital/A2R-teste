'use strict'

const CommonHook = exports = module.exports = {}
const uuidv4 = require('uuid/v4')

CommonHook.getSecureId = async (modelInstance) => {
  if (!modelInstance.secure_id) {
    modelInstance.secure_id = uuidv4()
   }
   return modelInstance
}
