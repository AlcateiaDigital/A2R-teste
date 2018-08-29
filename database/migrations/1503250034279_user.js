'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name', 80).notNullable()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('email', 254).notNullable().unique()
      table.string('phone_1')
      table.string('phone_2')
      table.string('avatar')
      table.enum('status', ['active', 'inactive'])
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
