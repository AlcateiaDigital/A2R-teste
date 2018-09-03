'use strict'

const Route = use('Route')

Route
.group(() => {

  // SELLER
  Route
  .resource('products', 'Seller/ProductController')
  .apiOnly()
  .middleware(['is:(seller || master)'])

  Route
  .post('sellers', 'Seller/SellerController.store').middleware(['is:(seller || master)'])

  Route
  .put('sellers/:id', 'Seller/SellerController.update')

  Route
  .resource('seller/users', 'Seller/UserController')
  .apiOnly()
  .middleware(['is:(seller || master)'])

  Route
  .resource('menu-options', 'Seller/MenuOptionController')
  .apiOnly()
  .middleware(['is:(seller || master)'])

  Route
    .get('menu-options/:id/products', 'Seller/MenuOptionController.getProducts')
    .middleware(['is:(seller || master)'])



  //  CUSTOMER
    Route
    .get('users/:id', 'Customer/UserController.show')
      .middleware(['is:customer'])
    Route
    .put('users/:id', 'Customer/n UserController.update')
      .middleware(['is:customer'])

      Route
      .get('sellers', 'Customer/SellerController.index')
      .middleware(['is:customer'])

      Route
      .get('sellers/:id', 'Customer/SellerController.show')
      .middleware(['is:customer'])

    // ADMIN
    Route
  .resource('categories', 'Admin/CategoryController')
  .apiOnly()
  .middleware(['is:master'])

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
    .post('login/token', 'AuthController.store')
    Route
    .post('users', 'Customer/UserController.store')

  })
  .prefix('api/v1')
