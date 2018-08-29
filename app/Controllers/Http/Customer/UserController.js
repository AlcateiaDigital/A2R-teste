'use strict'

const User = use('App/Models/User')
const Role = use('Adonis/Acl/Role')

class UserController {

  async store ({ request, response }) {

    const data = request.only(["name", "email", "password", "phone_1"])

    const user = await User.create({...data, status: 'active'})
    const role = await Role.query().where('slug', 'customer').firstOrFail()

    await user.roles().attach([role.id])

    return user

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
