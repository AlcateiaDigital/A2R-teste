'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const MenuOption = use('App/Models/MenuOption')

class DatabaseSeeder {
  async run () {

    await Factory
    .model('App/Models/Category')
    .createMany(10)

    for(let i = 0; i < 10; i++) {

      const seller = await Factory.model('App/Models/Seller').create()

        const menuOptions = await Factory.model('App/Models/MenuOption').makeMany(5)
        await seller.menuOptions().saveMany(menuOptions)

          const products = await Factory.model('App/Models/Product').makeMany(5)
          await seller.products().saveMany(products)

    }

  }
}

module.exports = DatabaseSeeder
