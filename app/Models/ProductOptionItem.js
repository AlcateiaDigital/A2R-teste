'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class ProductOptionItem extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (productOptionItemInstance) => {
      if (!productOptionItemInstance.secure_id) {
        productOptionItemInstance.secure_id = uuidv4()
      }
    })
  }
  static get hidden () {
    return ['id']
  }
}

module.exports = ProductOptionItem
