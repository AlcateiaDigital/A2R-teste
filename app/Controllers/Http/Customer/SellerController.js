'use strict'

const Seller = use('App/Models/Seller')
const { validate } = use('Validator')

class SellerController {

  async index ({ request }) {

    const { zipcode } = request.all()

    const sellers = Seller.query()
      .nearBy(zipcode)
      .fetch()

    return sellers
  }

  async show ({ params, request }) {

    const seller = await Seller.query()
      .with('menuOptions')
      .firstOrFail('secure_id', params.id)

    return seller

  }

}

module.exports = SellerController
