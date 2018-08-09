'use strict'

const Product = use('App/Models/Product')
const Seller = use('App/Models/Seller')
const Category = use('App/Models/Category')
const MenuOption = use('App/Models/MenuOption')
const { validate } = use('Validator')

class ProductController {

  async index ({ request, response, auth }) {
    const seller = await Seller.findByOrFail('account_id', auth.user.account_id)

    return await Product
      .query()
      .where('seller_id', seller.id)
      .get()
  }

  async store ({ request, auth, response }) {

    const data = request.all()

    const rules = {
      name: 'required|string',
      description: 'required|string',
      category_id: 'required|string',
      menu_option_id: 'required|string',
      price: 'required|numeric',
      status: 'required|string'
    }

    const validation = await validate(data, rules);

    if (validation.fails()) {
      return response.status(422).send(validation._errorMessages)
    }


    const dataProduct = request.only(["name", "description", "price", "status"])

    const seller = await Seller.findByOrFail('account_id', auth.user.account_id)

    const category = await Category.findByOrFail('secure_id', data.category)

    const menuOption = await MenuOption
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', data.menuOption)

    const product = await Product.create({ ...dataProduct, seller_id: seller.id, category_id: category.id, menu_option_id: menuOption.id})

    return product
  }


  async show ({ params, request, auth }) {
    const userLogged = auth.user

    const seller = await Seller.findByOrFail('account_id', userLogged.account_id)

    const product = await Product
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', params.id)


    return product
  }


  async update ({ params, request, auth,  response }) {

    const dataProduct = request.only(["name", "description", "price", "status"])

    const data = request.all()

    const seller = await Seller.findByOrFail('account_id', auth.user.account_id)

    const product = await Product
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', params.id)
/*
    const category = await Category.findByOrFail('secure_id', data.category) */

/*     const menuOption = await MenuOption
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', data.menuOption) */
    product.merge({...dataProduct, })

    await product.save()
    return product
  }

}

module.exports = ProductController
