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

class DatabaseSeeder {
  async run () {

    await Factory
    .model('App/Models/Category')
    .createMany(10)

    await Factory
    .model('App/Models/User')
    .createMany(10)
    var i;
    for (i = 0; i <= 10; i++) {
      const account = await Factory.model('App/Models/Account').create()
      const user = await Factory.model('App/Models/User').make()
      const menuOption = await Factory.model('App/Models/MenuOption').make()
      const seller = await Factory.model('App/Models/Seller').create({account_id: account.id})
      await account.users().save(user)
      await seller.menuOptions().save(menuOption)
      const products = await Factory.model('App/Models/Product').makeMany(10, {menu_option_id: menuOption.id})
      await seller.products().saveMany(products)
    }
  }
}

module.exports = DatabaseSeeder
