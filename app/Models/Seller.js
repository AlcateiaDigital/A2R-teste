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

  static scopeNearBy (query, zipcode) {
/*     const haversine = `(6371 * acos(cos(radians(${latitude}))
      * cos(radians(latitude))
      * cos(radians(longitude)
      - radians(${longitude}))
      + sin(radians(${latitude}))
      * sin(radians(latitude))))` */
    return query
    .select('secure_id', 'type', 'name', 'rating', 'minimum_handling_time', 'maximum_handling_time')
    .where('address_zipcode', zipcode)
/*     return query
      .select('*', Database.raw(`${haversine} as distance`))
      .orderBy('distance') */
  }

  static get hidden () {
    return ['id', 'account_id']
  }

}

module.exports = Seller
