'use strict'

const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('secure_id').notNullable().unique()
      table.string('name').notNullable().unique()
      table.string('image_url')
      table.integer('priority')
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
