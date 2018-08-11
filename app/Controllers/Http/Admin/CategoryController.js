'use strict'

const Category = use('App/Models/Category')
const Seller = use('App/Models/Seller')

class CategoryController {

  async index ({ request, response }) {
    return Category.all()
  }

  async store ({ request, auth, response }) {

    const data = request.only(["name", "priority", "slug"])
    const category = await Category.create({ ...data })

    return category
  }


  async show ({ params, request, auth }) {
    const userLogged = auth.user

    const seller = await Seller.findByOrFail('account_id', userLogged.account_id)

    const category = await category
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', params.id)


    return category
  }





  async update ({ params, request, auth,  response }) {

    const data = request.only(["name", "priority", "slug"])

    const userLogged = auth.user

    const seller = await Seller.findByOrFail('account_id', userLogged.account_id)

    const category = await Category
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', params.id)

    category.merge(data)

    await category.save()

    return category
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoryController
