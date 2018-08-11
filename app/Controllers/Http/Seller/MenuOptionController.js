'use strict'

const MenuOption = use('App/Models/MenuOption')
const Seller = use('App/Models/Seller')
const { validate } = use('Validator')

class MenuOptionController {

  async index ({ request, response, auth }) {

    const data = request.all()

    const rules = {
      name: 'required|unique:menu_options|string',
      priority: 'required|numeric'
    }

    const validation = await validate(data, rules);

    if (validation.fails()) {
      return response.status(422).send(validation._errorMessages)
    }


    const seller = await Seller.findByOrFail('account_id', auth.user.account_id)

    return await
      MenuOption
        .query()
        .where('seller_id', seller.id)
        .get()
  }

  async store ({ request, auth, response }) {

    const data = request.only(["name", "priority"])

    const seller = await Seller.findByOrFail('account_id', auth.user.account_id)

    return await MenuOption.create({...data, seller_id: seller.id})

  }


  async show ({ params, request, auth }) {

    const seller = await Seller.firstOrFail('account_id', auth.user.account_id)

    return await MenuOption
      .query()
      .where('seller_id', seller.id)
      .firstOrFail('secure_id', params.id)

  }





  async update ({ params, request, auth,  response }) {

    const data = request.all()

    const rules = {
      name: 'required|unique:menu_options|string',
      priority: 'required|numeric'
    }

    const validation = await validate(data, rules);

    if (validation.fails()) {
      return response.status(422).send(validation._errorMessages)
    }

    const userLogged = auth.user

    const seller = await Seller.findByOrFail('account_id', userLogged.account_id)

    const menuOption = await menuOption
    .query()
    .where('seller_id', seller.id)
    .firstOrFail('secure_id', params.id)

    MenuOption.merge(data)

    await MenuOption.save()

    return menuOption
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = MenuOptionController
