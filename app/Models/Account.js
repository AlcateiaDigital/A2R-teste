'use strict'

const Model = use('Model')
const Database = use('Database')

class Account extends Model {

  users () {
    return this.hasMany('App/Models/User')
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

}

module.exports = Account
