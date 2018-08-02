'use strict'

const Schema = use('Schema')

class SellerCategorySchema extends Schema {
  up () {
    this.create('seller_categories', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.integer('seller_id').unsigned().references('id').inTable('sellers')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.integer('priority')
      table.timestamps()
    })
  }

  down () {
    this.drop('seller_categories')
  }
}

module.exports = SellerCategorySchema
