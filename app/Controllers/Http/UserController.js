'use strict'

const User = use('App/Models/User')

class UserController {

  async store ({ request, response }) {
    const data = request.only(["first_name", "last_name", "email", "password", "status", "avatar"])
    const user = await User.create(data)

    return user
  }

  async show ({ params, request }) {

    const user = await User.findByOrFail('secure_id', params.id)

    return user
  }

  async update ({ params, request, response }) {
    const data = request.all()
    const user = await User.findByOrFail('secure_id', params.id)

    user.merge(data)

    await user.save()

    return user
  }

}

module.exports = UserController
