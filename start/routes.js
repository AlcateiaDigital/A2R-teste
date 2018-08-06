'use strict'

const Route = use('Route')

Route
.group(() => {

  // CATEGORY
  Route
  .resource('categories', 'Admin/CategoryController')
  .apiOnly()
  .middleware(['is:master'])

// PRODUCT
  Route
  .resource('products', 'Seller/ProductController')
  .apiOnly()
  .middleware(['is:(seller || master)'])

  // MENU OPTION
  Route
  .resource('menu-options', 'Seller/MenuOptionController')
  .apiOnly()
  .middleware(['is:(seller || master)'])


  // SELLER
  Route
  .post('sellers', 'Seller/SellerController.store').middleware(['is:(seller || master)'])

  Route
  .put('sellers/:id', 'SellerController.update')

  // USER SELLER
  Route
  .resource('seller/users', 'Seller/UserController')
  .apiOnly()
  .middleware(['is:(seller || master)'])

  // USER CUSTOMER
    Route
    .get('users/:id', 'UserController.show')
    Route
    .put('users/:id', 'UserController.update')

    // ACCOUNT
    Route
    .resource('accounts', 'Admin/AccountController')
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
