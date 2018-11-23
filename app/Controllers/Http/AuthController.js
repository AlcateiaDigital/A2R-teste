'use strict'

const User = use('App/Models/User')

var firebase = require("firebase")

var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};

firebase.initializeApp(config);

class AuthController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User
      .query()
      .where('email', email)
      .firstOrFail('password', password)

    return {...token, user}
  }

  async fire ({  }) {
    console.log(firebase.auth())
  }

}

module.exports = AuthController
