'use strict'

const Model = use('Model')

class MenuOption extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }

  products () {
    return this.belongsToMany('App/Models/Product', 'menu_option_id', 'product_id', 'id', 'id')
      .pivotTable('menu_products')
      .withTimestamps()
  }

  seller () {
    return this.belongsTo('App/Models/Seller')
  }

  static get hidden () {
    return ['id', 'seller_id']
  }
}

module.exports = MenuOption
