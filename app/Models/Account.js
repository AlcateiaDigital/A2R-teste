'use strict'

const Model = use('Model')
const Database = use('Database')
const uuidv4 = require('uuid/v4')
class Account extends Model {

  static boot () {
    super.boot()


    this.addHook('beforeSave', async (accountInstance) => {
      if (!accountInstance.secure_id) {
        accountInstance.secure_id = uuidv4()
      }
    })
  }

  users () {
    return this.hasMany('App/Models/User')
  }
  seller () {
    return this.hasOne('App/Models/Seller')
  }

  static scopeNearBy (query, latitude, longitude, distance) {
    const haversine = `(6371 * acos(cos(radians(${latitude}))
      * cos(radians(latitude))
      * cos(radians(longitude)
      - radians(${longitude}))
      + sin(radians(${latitude}))
      * sin(radians(latitude))))`

    return query
      .select('*', Database.raw(`${haversine} as distance`))
      .whereRaw(`${haversine} < ${distance}`)
      .orderBy('distance')
  }

  static get hidden () {
    return ['id']
  }

}

module.exports = Account
