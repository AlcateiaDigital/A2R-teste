'use strict'

const Schema = use('Schema')

class ProductOptionNameSchema extends Schema {
  up () {
    this.create('product_option_names', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('product_id').unsigned().references('id').inTable('products')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('quantity').default(1)
      table.boolean('required').default(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('product_option_names')
  }
}

module.exports = ProductOptionNameSchema
