'use strict'

const { formatters } = use('Validator')

class UpdateProduct {

  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string',
      description: 'string',
      category_id: 'string',
      price: 'number',
      status: 'string'
    }
  }

}

module.exports = UpdateProduct
