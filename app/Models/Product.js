'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class Product extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }

  menuProducts () {
    return this.belongsToMany('App/Models/MenuOption')
      .pivotTable('menu_products')
      .withTimestamps()
  }

  seller () {
    return this.belongsTo('App/Models/Seller')
  }

  static get hidden () {
    return ['id', 'seller_id', 'category_id', 'menu_option_id']
  }

}

module.exports = Product
