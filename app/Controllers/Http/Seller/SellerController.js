'use strict'

const Seller = use('App/Models/Seller')
const { validate } = use('Validator')

class SellerController {

  async index ({ request }) {

    const { latitude, longitude } = request.all()

    const accounts = Account.query()
      .nearBy(latitude, longitude, 10)
      .fetch()

    return accounts
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


  async update ({ params, request, auth, response }) {

    const data = request.all()

    const rules = {
      name: 'required|string',
    }

    const validation = await validate(data, rules);

    if (validation.fails()) {
      return response.badReqeust()
    }

    const user = auth.user
    const seller = await Seller
      .query()
      .where('account_id', user.account_id)
      .firstOrFail('secure_id', params.id)

    seller.merge(data)

    await seller.save()

    return seller
  }

}

module.exports = SellerController
