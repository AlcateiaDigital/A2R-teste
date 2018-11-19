'use strict'

const { formatters } = use('Validator')

class StoreUserAddress {

  get validateAll () {
    return true
  }

  get rules () {
    return {
      "name": 'string|max:80',
      "street": 'string',
      "street_number": 'string',
      "complement": 'string',
      "neighborhood": 'string',
      "city": 'string',
      "state": 'string',
      "zipcode": 'string',
      "country": 'string',
      "latitude": 'string',
      "longitude": 'string'
    }
  }

}

module.exports = StoreUserAddress
