'use strict'

const Model = use('Model')
const Database = use('Database')
const uuidv4 = require('uuid/v4')
class Account extends Model {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }

  users () {
    return this.hasMany('App/Models/User')
  }
  seller () {
    return this.hasOne('App/Models/Seller')
  }

  static get hidden () {
    return ['id']
  }

}

module.exports = Account
