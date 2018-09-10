'use strict'

const Seller = use('App/Models/Seller')
const { validate } = use('Validator')

class SellerController {

  async index ({ request }) {

    const { page } = request.only('page') || 1
    const filter = request.only(['address_zipcode', 'type'])

    const sellers = Seller.query()
    .where(filter)
    .select('secure_id', 'type', 'name', 'rating', 'minimum_handling_time', 'maximum_handling_time', 'image_url')
    .paginate(page, 10)

    return sellers
  }

  async show ({ params, request }) {

    const seller = await Seller.query()
      .with('menuOptions')
      .firstOrFail('secure_id', params.id)

    return seller

  }
  // async store ({ request, auth, response }) {
  //   const data = request.all()
  //
  //   try {
  //     await Seller.query().where('account_id', auth.user.account_id).firstOrFail()
  //     response.status(422).send({message: 'You already have a seller registered to this account'});
  //   } catch (err) {
  //     const seller = await Seller.create({ ...data, account_id: auth.user.account_id})
  //     return seller
  //   }
  // }


  async show ({ params, request, auth }) {
    const user = auth.user
    const seller = await Seller
      .query()
      .where('account_id', user.account_id)
      .firstOrFail('secure_id', params.id)
    return seller
  }

}

module.exports = SellerController
