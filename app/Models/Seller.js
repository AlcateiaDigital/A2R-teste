'use strict'

const Model = use('Model')
class Seller extends Model {

  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }

  account () {
    return this.belongsTo('App/Models/Account')
  }
  menuOptions () {
    return this.hasMany('App/Models/MenuOption')
  }
  products () {
    return this.hasMany('App/Models/Product')
  }

  static get hidden () {
    return ['id', 'account_id']
  }

}

module.exports = Seller
