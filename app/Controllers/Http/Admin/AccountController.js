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

    const seller = await account
    .seller()
    .create({})

    return account
  }


  async show ({ params, request, auth }) {
    const user = auth.user
    const roles = await user.getRoles()
    const account = await Account.findByOrFail('secure_id', params.id)
    return account
  }


  async update ({ params, request, response }) {
    const data = request.all()
    const user = auth.user
    const roles = await user.getRoles()

    try {

      const account = await Account.findByOrFail('secure_id', params.id)

      if (account.id === user.account_id || roles.includes("master")) {
        account.merge(data)

        await account.save()

        return account

      } else {
        throw 401
      }

    } catch (error) {
      response.status(error).send();
    }
  }

}

module.exports = AccountController
