'use strict'

const { formatters } = use('Validator')

class StoreProduct {

  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string',
      description: 'required|string',
      category_id: 'required|string',
      price: 'required|number',
      status: 'required|string'
    }
  }

}

module.exports = StoreProduct
