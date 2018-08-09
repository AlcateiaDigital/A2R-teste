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
      subtitle: 'required|string',
      type: 'required|string',
      phone_1: 'required|string',
      phone_2: 'nullable|string',
      address_street: 'required|string',
      address_street_number: 'required|string',
      address_complement: 'required|string',
      address_neighborhood: 'required|string',
      address_city: 'required|string',
      address_state: 'required|string',
      address_zipcode: 'required|string',
      address_country: 'required|string',
      maximum_handling_time: 'required|numeric',
      minimum_handling_time: 'required|numeric'
    }

    const validation = await validate(data, rules);

    if (validation.fails()) {
      return response.status(422).send(validation._errorMessages)
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
