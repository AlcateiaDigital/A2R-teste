'use strict'

const Seller = use('App/Models/Seller')
class SellerController {

  async index ({ request }) {
    const { latitude, longitude } = request.all()

    const accounts = Account.query()
    .nearBy(latitude, longitude, 10)
    .fetch()


    return accounts
  }

  async store ({ request, auth, response }) {
    const data = request.all()
    try {
      await Seller.query().where('account_id', auth.user.account_id).firstOrFail()
      response.status(422).send({message: 'You already have a seller registered to this account'});
    } catch (err) {
      const seller = await Seller.create({ ...data, account_id: auth.user.account_id})
      return seller
    }
  }


  async show ({ params, request, auth }) {
    const user = auth.user
    const roles = await user.getRoles()
    const seller = await Seller.findByOrFail('secure_id', params.id)
    return account
  }


  async update ({ params, request, auth, response }) {

    const data = request.all()

    const user = auth.user
    const roles = await user.getRoles()

    const seller = await Seller.firstOrFail('secure_id', params.id)

    if (seller.account_id === user.account_id || roles.includes("master")) {

      seller.merge(data)
      await seller.save()

      return seller
     } else {
      response.status(401).send();
    }
  }

}

module.exports = SellerController
