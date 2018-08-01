'use strict'

const Route = use('Route')

Route
.group(() => {

    Route
    .get('users', 'UserController.index').middleware(['is:(master || seller) && !customer'])
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
