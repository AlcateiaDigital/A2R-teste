'use strict'

const User = use('App/Models/User')

class UserController {

  async store ({ request, response }) {

    const data = request.only(["first_name", "last_name", "email", "password", "status", "avatar"])
    const user = await User.create(data)

    return user
  }

  async show ({ params, auth, request }) {

    const user = await User
    .query()
    .where('id', auth.user.id)
    .firstOrFail('secure_id', params.id)

    return user
  }

  async update ({ params, auth, request, response }) {
    const data = request.all()
    const user = await User
    .query()
    .where('id', auth.user.id)
    .firstOrFail('secure_id', params.id)

    user.merge(data)

    await user.save()

    return user
  }

}

module.exports = UserController
