'use strict'

const User = use('App/Models/User')

class UserController {

  async index ({ request, auth }) {

    const users = User
    .query()
    .where('account_id', auth.user.account_id)
    .get()


    return users
  }

  async store ({ request, auth, response }) {

    const data = request.only(["first_name", "last_name", "email", "password", "status", "avatar", "phone_1", "phone_2"])
    const user = await User.create({ ...data, account_id: auth.user.account_id})

    return user
  }


  async show ({ params, request }) {

    const user = await User
    .query()
    .where('account_id', auth.user.account_id)
    .firstOrFail('secure_id', params.id)

    return user
  }

  async update ({ params, auth, request, response }) {
    const data = request.all()
    const user = await User
    .query()
    .where('account_id', auth.user.account_id)
    .firstOrFail('secure_id', params.id)

    user.merge(data)

    await user.save()

    return user
  }

}

module.exports = UserController
