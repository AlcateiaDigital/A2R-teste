'use strict'

const Route = use('Route')

Route
  .group(() => {

    // PRODUCTS
    Route
      .resource('products', 'ProductController')
      .apiOnly()
      .middleware(['is:(seller || master)'])


    // MENU OPTIONS
    Route
      .resource('menu-options', 'MenuOptionController')
      .apiOnly()
      .middleware(['is:(seller || master)'])

    Route
      .get('menu-options/:id/products', 'MenuOptionController.getProducts')
      .middleware(['is:(seller || master)'])


    // USER

    Route
      .get('users/:id', 'UserController.show')
      .middleware(['is:customer'])
    Route
      .put('users/:id', 'UserController.update')
      .middleware(['is:customer'])

      Route
      .resource('addresses', 'UserAddressController')
      .apiOnly()
      .middleware(['is:customer'])


    // SELLER
    Route
      .post('sellers', 'SellerController.store')
      .middleware(['is:(seller || master)'])

    Route
      .put('sellers/:id', 'SellerController.update')
      .middleware(['is:(seller || master)'])

    Route
      .get('sellers', 'SellerController.index')
      .middleware(['is:customer'])

    Route
      .get('sellers/:id', 'SellerController.show')
      .middleware(['is:customer'])


    // CATEGORY
    Route
      .resource('categories', 'CategoryController')
      .apiOnly()
      .middleware(['is:master'])

    // ACCOUNT
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
      .post('login/token', 'AuthController.store')
    Route
      .post('users', 'UserController.store')

  })
  .prefix('api/v1')
