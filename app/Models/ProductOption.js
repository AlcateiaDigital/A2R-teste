'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class ProductOption extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (productOptionInstance) => {
      if (!productOptionInstance.secure_id) {
        productOptionInstance.secure_id = uuidv4()
      }
    })
  }
  static get hidden () {
    return ['id']
  }
}

module.exports = ProductOption
