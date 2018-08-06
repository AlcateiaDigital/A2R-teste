'use strict'

const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name', 80).notNullable()
      table.enum('type', ['seller', 'staff'])
      table.string('legal_name', 80)
      table.string('resp_name', 80).notNullable()
      table.enum('resp_document_type', ['cpf', 'cnpj'])
      table.string('resp_document_number')
      table.enum('document_type', ['cpf', 'cnpj'])
      table.string('document_number')
      table.string('phone_1').notNullable()
      table.string('phone_2')
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
