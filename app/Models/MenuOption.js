'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class MenuOption extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }

  seller () {
    return this.belongsTo('App/Models/Seller')
  }
  products () {
    return this.belongsTo('App/Models/Product')
  }

  static get hidden () {
    return ['id', 'seller_id']
  }
}

module.exports = MenuOption
