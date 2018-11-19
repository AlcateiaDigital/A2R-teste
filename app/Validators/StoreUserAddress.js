'use strict'

const { formatters } = use('Validator')

class StoreUserAddress {

  get validateAll () {
    return true
  }

  get rules () {
    return {
      "name": 'string|required|max:80',
      "street": 'string|required',
      "street_number": 'string|required',
      "complement": 'string',
      "neighborhood": 'string|required',
      "city": 'string|required',
      "state": 'string|required',
      "zipcode": 'string|required',
      "country": 'string|required',
      "latitude": 'string',
      "longitude": 'string'
    }
  }

}

module.exports = StoreUserAddress
