'use strict'


const Factory = use('Factory')
const Database = use('Database')
const Account = use('App/Models/Account')
const User = use('App/Models/User')
const uuidv4 = require('uuid/v4');
class UserSeeder {
  async run () {
    const account = await Account.create({
      secure_id: uuidv4(),
      name: 'Easy Food',
      type: 'staff',
      document_type: 'cpf',
      resp_name: 'Adham Wynston',
      resp_document_type: 'cpf',
      resp_document_number: '04035065145',
      'legal_name': 'pit dog ltda',
      document_number: '04035065145',
      phone_1: '649777172616',
      phone_2: '649777111116',
      address_street: '04',
      address_street_number: '1800',
      address_complement: 'Casa Amarela',
      address_neighborhood: 'São José',
      address_city: 'São Luis de Montes Belos',
      address_state: 'GO',
      address_zipcode: '76100000',
      address_country: 'BR',
      latitude: -15.523342,
      longitude: -49.380585
    })
    await account
    .users()
    .create({
      first_name: 'Easy',
      last_name: 'Food',
      email: 'easy@food.com',
      password: '123456',
      status: true
    })
    const seller = await Account.create({
      secure_id: uuidv4(),
      name: 'Seller tal',
      type: 'staff',
      document_type: 'cpf',
      resp_name: 'Toti azevedo',
      resp_document_type: 'cpf',
      resp_document_number: '13131313131',
      'legal_name': 'pit dog ltda',
      document_number: '1312456789',
      phone_1: '649777172616',
      phone_2: '649777111116',
      address_street: '04',
      address_street_number: '1800',
      address_complement: 'Casa Amarela',
      address_neighborhood: 'São José',
      address_city: 'São Luis de Montes Belos',
      address_state: 'GO',
      address_zipcode: '76100000',
      address_country: 'BR',
      latitude: -15.523342,
      longitude: -49.380585
    })
    await seller
    .users()
    .create({
      first_name: 'Seller',
      last_name: 'Teste',
      email: 'seller@food.com',
      password: '123456',
      status: true
    })
    await User.create({
      first_name: 'Customer',
      last_name: 'Teste',
      email: 'customer@food.com',
      password: '123456',
      status: true
    })
  }
}

module.exports = UserSeeder
