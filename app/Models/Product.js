'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class Product extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (productInstance) => {
      if (!productInstance.secure_id) {
        productInstance.secure_id = uuidv4()
      }
    })
  }

  menuOption () {
    return this.belongsTo('App/Models/MenuOption')
  }

  seller () {
    return this.belongsTo('App/Models/Seller  ')
  }

  static get hidden () {
    return ['id', 'seller_id', 'category_id', 'menu_option_id']
  }

}

module.exports = Product
