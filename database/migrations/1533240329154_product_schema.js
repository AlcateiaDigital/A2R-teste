'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name', 80).notNullable()
      table.string('description', 80).notNullable()
      table.integer('seller_id').unsigned().references('id').inTable('sellers')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.decimal('price').notNullable()
      table.decimal('sale_price')
      table.string('picture_url')
      table.enum('status', ['active', 'inactive']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
