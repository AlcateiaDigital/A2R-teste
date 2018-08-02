'use strict'

const SellerCategory = use('App/Models/SellerCategory')
const Seller = use('App/Models/Seller')
class SellerCategoryController {

  async index ({ request, response, view }) {

  }

  async store ({ request, auth, response }) {

    const data = request.only(["name", "priority"])

    const seller = await Seller.findByOrFail('account_id', auth.user.account_id)

    const sellerCategory = await SellerCategory.create({ ...data, seller_id: seller.id })

    return sellerCategory
  }


  async show ({ params, request, auth }) {
    const userLogged = auth.user

    const seller = await Seller.findByOrFail('account_id', userLogged.account_id)

    const sellerCategory = await SellerCategory
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', params.id)


    return sellerCategory
  }





  async update ({ params, request, auth,  response }) {

    const data = request.only(["name", "priority"])
    const userLogged = auth.user

    const seller = await Seller.findByOrFail('account_id', userLogged.account_id)

    const sellerCategory = await SellerCategory
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', params.id)

    sellerCategory.merge(data)

    await sellerCategory.save()

    return sellerCategory
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = SellerCategoryController
