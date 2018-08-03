'use strict'

const Schema = use('Schema')

class ProductOptionSchema extends Schema {
  up () {
    this.create('product_options', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.integer('product_option_name_id').unsigned().references('id').inTable('product_option_names')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.decimal('price').notNullable().default(0)
      table.enum('status', ['active', 'inactive']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_options')
  }
}

module.exports = ProductOptionSchema
