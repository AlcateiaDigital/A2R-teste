'use strict'

const User = use('App/Models/User')

class UserController {

  async store ({ request, response }) {

    const data = request.only(["name", "email", "password", "phone_1"])

    return await User.create({...data, status: 'active'})

  }

  async show ({ params, auth, request }) {

    return await User
      .query()
      .where('id', auth.user.id)
      .firstOrFail('secure_id', params.id)
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
