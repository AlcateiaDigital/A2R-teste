'use strict'

const Route = use('Route')

Route
.group(() => {

  Route
  .resource('categories', 'CategoryController')
  .apiOnly()
  .middleware(['is:master'])

  Route
  .resource('products', 'ProductController')
  .apiOnly()
  .middleware(['is:(seller || master)'])

  Route
  .resource('menu-options', 'MenuOptionController')
  .apiOnly()
  .middleware(['is:(seller || master)'])

  Route
  .post('sellers', 'SellerController.store').middleware(['is:(seller || master)'])
  Route
  .post('users/by-seller', 'UserController.addUser').middleware(['is:(seller || master)'])
  Route
  .put('sellers/:id', 'SellerController.update')

    Route
    .get('users', 'UserController.index').middleware(['is:(master || seller)'])
    Route
    .get('users/:id', 'UserController.show')
    Route
    .put('users/:id', 'UserController.update')

    Route
    .resource('accounts', 'AccountController')
    .apiOnly()
    .middleware(['is:master'])
    .validator(new Map([
      [
        ['accounts.store'],
        ['StoreAccount']
      ],
      [
        ['accounts.update'],
        ['UpdateAccount']
      ]
    ]))

})
.middleware('auth:jwt')
.prefix('api/v1')

Route
  .group(() => {

    Route
    .post('oauth/token', 'AuthController.store')
    Route
    .post('users', 'UserController.store')
  })
  .prefix('api/v1')
