'use strict'

const Model = use('Model')
const uuidv4 = require('uuid/v4')

class Category extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (categoryInstance) => {
      if (!categoryInstance.secure_id) {
        categoryInstance.secure_id = uuidv4()
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

module.exports = Category
