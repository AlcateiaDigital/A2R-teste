'use strict'

const Schema = use('Schema')

class ProductOptionItemSchema extends Schema {
  up () {
    this.create('product_option_items', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name', 80).notNullable()
      table.integer('seller_id').unsigned().references('id').inTable('sellers')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('product_option_id').unsigned().references('id').inTable('product_options')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.decimal('price').notNullable().default(0)
      table.enum('status', ['active', 'inactive']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_option_items')
  }
}

module.exports = ProductOptionItemSchema
