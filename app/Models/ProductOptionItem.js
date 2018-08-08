'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class ProductOptionItem extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }
  static get hidden () {
    return ['id']
  }
}

module.exports = ProductOptionItem
