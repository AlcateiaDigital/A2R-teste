'use strict'

const Model = use('Model')
const Hash = use('Hash')
const uuidv4 = require('uuid/v4')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'CommonHook.getSecureId')
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }
  account () {
    return this.belongsTo('App/Models/Account')
  }
  roles () {
    return this.hasMany('Adonis/Acl/Role')
  }
  permissions () {
    return this.hasMany('Adonis/Acl/Permission')
  }
  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }

  static get hidden () {
    return ['password', 'id', 'account_id']
  }
  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
