'use strict'

const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name', 80).notNullable()
      table.enum('type', ['seller', 'customer', 'staff'])
      table.string('legal_name', 80)
      table.string('resp_name', 80).notNullable()
      table.enum('resp_document_type', ['cpf', 'cnpj'])
      table.string('resp_document_number')
      table.enum('document_type', ['cpf', 'cnpj'])
      table.string('document_number')
      table.string('phone_1').notNullable()
      table.string('phone_2')
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
      table.string('image_url')
      table.integer('handling_limit_time')
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
