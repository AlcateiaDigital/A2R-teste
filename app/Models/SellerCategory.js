'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class SellerCategory extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (sellerCategoryInstance) => {
      if (!sellerCategoryInstance.secure_id) {
        sellerCategoryInstance.secure_id = uuidv4()
      }
    })
  }

  seller () {
    return this.belongsTo('App/Models/Seller')
  }

  static get hidden () {
    return ['id', 'seller_id']
  }

}

module.exports = SellerCategory
