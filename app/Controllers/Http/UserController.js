'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    const data = request.only(["first_name", "last_name", "email", "password", "status", "avatar"])
    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
