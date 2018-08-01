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

    const account = await Account.create({ ...data})

    return account
  }


  async show ({ params, request }) {
    
    const account = await Account.findByOrFail('secure_id', params.id)

    return account
  }


  async update ({ params, request, response }) {
    const data = request.all()
    const account = await Account.findByOrFail('secure_id', params.id)

    account.merge(data)

    await account.save()

    return account
  }

}

module.exports = AccountController
