'use strict'

const Schema = use('Schema')

class UserAddressSchema extends Schema {
  up () {
    this.create('user_addresses', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name', 80).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('street')
      table.string('street_number')
      table.string('complement')
      table.string('neighborhood')
      table.string('city')
      table.string('state', 2)
      table.string('zipcode')
      table.enum('country', ['BR']).default('BR')
      table.decimal('latitude', 9, 6)
      table.decimal('longitude', 9, 6)
      table.timestamps()
    })
  }

  down () {
    this.drop('user_addresses')
  }
}

module.exports = UserAddressSchema
