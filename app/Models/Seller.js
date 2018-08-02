'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4');
class Seller extends Model {

  static boot () {
    super.boot()

    this.addHook('beforeSave', async (sellerInstance) => {
      if (!sellerInstance.secure_id) {
        sellerInstance.secure_id = uuidv4()
      }
    })
  }

  account () {
    return this.belongsTo('App/Models/Account')
  }

  static get hidden () {
    return ['id']
  }

}

module.exports = Seller
