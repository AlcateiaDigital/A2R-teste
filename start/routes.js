'use strict'

const Route = use('Route')

Route
  .group(() => {

    // PERMISSION

    Route
      .resource('permissions', 'PermissionController')
      .apiOnly()
      .middleware(['is:master'])

    // PRODUCTS
    Route
      .resource('products', 'ProductController')
      .apiOnly()
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
      .validator(new Map([
        [
          ['addresses.store'],
          ['StoreUserAddress']
        ],
        [
          ['addresses.update'],
          ['StoreUserAddress']
        ]
      ]))


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

      
    // MENU OPTIONS
    Route
    .get('sellers/:sellerId/menu-options', 'MenuOptionController.index')
    .middleware(['is:customer'])

    Route
    .get('sellers/:sellerId/menu-options/:id', 'MenuOptionController.show')
    .middleware(['is:customer'])


    Route
    .post('sellers/:sellerId/menu-options/:menuOptionId/products', 'ProductController.store')
    .middleware(['is:(seller || master)'])
    .validator('StoreProduct')

    Route
    .post('sellers/:sellerId/menu-options/:menuOptionId/products/:id', 'ProductController.update')
    .middleware(['is:(seller || master)', 'UpdateProduct'])
    .validator('UpdateAccount')



    // CATEGORY
    Route
    .get('categories', 'CategoryController.index')

    Route
    .post('categories', 'CategoryController.store')
    .middleware(['is:master'])

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
      .get('firebase', 'AuthController.fire')

    Route
      .post('login/token', 'AuthController.store')
    Route
      .post('users', 'UserController.store')

  })
  .prefix('api/v1')
