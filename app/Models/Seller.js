'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4');
class Seller extends Model {

  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }

  account () {
    return this.belongsTo('App/Models/Account')
  }

  static get hidden () {
    return ['id', 'account_id']
  }

}

module.exports = Seller
