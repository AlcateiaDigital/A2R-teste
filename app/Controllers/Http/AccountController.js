'use strict'

const Account = use('App/Models/Account')

class AccountController {

  async index ({ request }) {
    const { latitude, longitude } = request.all()

    const accounts = Account.query()
    .nearBy(latitude, longitude, 10)
    .fetch()


    return accounts
  }

  async store ({ request, response }) {
    const data = request.all()

    const account = await Account.create({ ...data, type: 'seller'})

    return account
  }


  async show ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = AccountController
