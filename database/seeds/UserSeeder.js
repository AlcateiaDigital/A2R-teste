'use strict'


const Factory = use('Factory')
const Database = use('Database')
const Account = use('App/Models/Account')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const master = await Account.create({
      name: 'Easy Food',
      type: 'staff',
      document_type: 'cpf',
      resp_name: 'Adham Wynston',
      resp_document_type: 'cpf',
      resp_document_number: '04035065145',
      'legal_name': 'pit dog ltda',
      document_number: '04035065145',
      phone_1: '649777172616',
      phone_2: '649777111116'
    })
     await master
    .users()
    .create({
      name: 'EasyFood',
      email: 'easy@food.com',
      password: '123456',
      status: true
    })
    const seller = await Account.create({
      name: 'Seller tal',
      type: 'staff',
      document_type: 'cpf',
      resp_name: 'Toti azevedo',
      resp_document_type: 'cpf',
      resp_document_number: '13131313131',
      legal_name: 'pit dog ltda',
      document_number: '1312456789',
      phone_1: '649777172616',
      phone_2: '649777111116'
    })
    await seller
    .users()
    .create({
      name: 'Seller',
      email: 'seller@food.com',
      password: '123456',
      status: 'active'
    })
    await seller
    .seller()
    .create({
      type: "Italiana",
      subtitle: "A melhor massa",
      name: "Maccheroni Massas",
      phone_1: "7242652642",
      minimum_handling_time: 40,
      maximum_handling_time: 50,
      address_street: '04',
      address_street_number: '1800',
      address_complement: 'Casa Amarela',
      address_neighborhood: 'São José',
      address_city: 'São Luis de Montes Belos',
      address_state: 'GO',
      address_zipcode: '76100000',
      address_country: 'BR',
      address_latitude: -15.523342,
      address_longitude: -49.380585
    })
    await User.create({
      name: 'Customer',
      email: 'customer@food.com',
      password: '123456',
      status: 'active'
    })
  }
}

module.exports = UserSeeder
