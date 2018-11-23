'use strict'

const Schema = use('Schema')

class MenuOptionSchema extends Schema {
  up () {
    this.create('menu_options', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.integer('seller_id').unsigned().references('id').inTable('sellers')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('name').notNullable()
      table.integer('priority')
      table.enum('status', ['active', 'inactive']).default('active').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('menu_options')
  }
}

module.exports = MenuOptionSchema
