'use strict'

const Schema = use('Schema')

class ProductOptionSchema extends Schema {
  up () {
    this.create('product_options', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name').notNullable()
      table.integer('product_id').unsigned().references('id').inTable('products')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('seller_id').unsigned().references('id').inTable('sellers')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('minimum_quantity')
      table.integer('maximum_quantity')
      table.boolean('required').default(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('product_options')
  }
}

module.exports = ProductOptionSchema
