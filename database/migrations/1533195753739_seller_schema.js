'use strict'

const Schema = use('Schema')

class SellerSchema extends Schema {
  up () {
    this.create('sellers', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('type',30)
      table.string('name', 80)
      table.string('description')
      table.string('phone_1')
      table.string('phone_2')
      table.string('picture_url')
      table.string('address_street')
      table.string('address_street_number')
      table.string('address_complement')
      table.string('address_neighborhood')
      table.string('address_city')
      table.string('address_state', 2)
      table.string('address_zipcode')
      table.enum('address_country', ['BR']).default('BR')
      table.decimal('address_latitude', 9, 6)
      table.decimal('address_longitude', 9, 6)
      table.decimal('rating')
      table.integer('minimum_handling_time')
      table.integer('maximum_handling_time')
      table.decimal('delivery_price').notNullable().defaultTo(0)
      table.boolean('working').notNullable().defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('sellers')
  }
}

module.exports = SellerSchema
