'use strict'

const User = use('App/Models/User')

class AuthController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User
      .query()
      .with('addresses')
      .where('email', email)
      .firstOrFail('password', password)

    return {...token, user}
  }
}

module.exports = AuthController
