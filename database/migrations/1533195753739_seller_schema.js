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
      table.string('address_street').notNullable()
      table.string('address_street_number').notNullable()
      table.string('address_complement').notNullable()
      table.string('address_neighborhood').notNullable()
      table.string('address_city').notNullable()
      table.string('address_state', 2).notNullable()
      table.string('address_zipcode').notNullable()
      table.enum('address_country', ['BR']).notNullable().default('BR')
      table.decimal('latitude', 9, 6)
      table.decimal('longitude', 9, 6)
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
