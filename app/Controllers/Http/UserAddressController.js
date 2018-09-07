'use strict'
const UserAddress = use('App/Models/UserAddress')
class UserAddressController {

  async store({ request, response, auth }) {

    const data = request.only(
      [
        "name",
        "street",
        "street_number",
        "complement",
        "neighborhood",
        "city",
        "state",
        "zipcode",
        "country",
        "latitude",
        "longitude"
      ])

    const user = await auth.getUser()

    const address = new UserAddress()

    address.fill(data)
    address.merge({
      user_id: user.id
    })
    address.save()

    return address

  }

}

module.exports = UserAddressController
