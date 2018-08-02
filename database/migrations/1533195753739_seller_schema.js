'use strict'

const Schema = use('Schema')

class SellerSchema extends Schema {
  up () {
    this.create('sellers', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('type',30).notNullable()
      table.string('subtitle')
      table.string('name', 80).notNullable()
      table.string('phone_1').notNullable()
      table.string('phone_2')
      table.string('image_url')
      table.decimal('rating')
      table.integer('minimum_handling_time')
      table.integer('maximum_handling_time')
      table.timestamps()
    })
  }

  down () {
    this.drop('sellers')
  }
}

module.exports = SellerSchema
