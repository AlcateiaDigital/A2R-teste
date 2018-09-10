'use strict'

const Schema = use('Schema')

class MenuProductSchema extends Schema {
  up () {
    this.create('menu_products', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('menu_option_id').unsigned().references('id').inTable('menu_options')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('menu_products')
  }
}

module.exports = MenuProductSchema
