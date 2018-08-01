'use strict'

const { formatters } = use('Validator')

class StoreAccount {

  get validateAll () {
    return true
  }

  get rules () {
    return {
      'name': 'string|required|max:80',
      'legal_name': 'string',
      'type': 'string|required',
      'resp_name': 'required|string',
      'resp_document_type': 'string',
      'resp_document_number': 'string',
      'phone_1': 'required|string',
      'phone_2': 'string',
      'document_type': 'required|min:3|max:4',
      'document_number': 'required|string',
     'address_street': 'required|string',
      'address_street_number': 'required|string',
      'address_complement': 'required|string',
      'address_neighborhood': 'required|string',
      'address_city': 'required|string',
     'address_state': 'required|string|max:2|min:2',
     'address_zipcode': 'required|string',
      'address_country': 'required|string',
      'latitude': 'required',
      'longitude': 'required'
    }
  }

}

module.exports = StoreAccount
