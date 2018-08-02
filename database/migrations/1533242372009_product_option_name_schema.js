'use strict'

const Schema = use('Schema')

class ProductOptionNameSchema extends Schema {
  up () {
    this.create('product_option_names', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_option_names')
  }
}

module.exports = ProductOptionNameSchema
