'use strict'

const Model = use('Model')

class UserAddress extends Model {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'CommonHook.getSecureId')
  }



  static get hidden () {
    return ['id', 'user_id']
  }


}

module.exports = UserAddress
