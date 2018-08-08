'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class Category extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }

  seller () {
    return this.belongsTo('App/Models/Seller')
  }

  static get hidden () {
    return ['id', 'seller_id']
  }

}

module.exports = Category
