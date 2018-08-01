'use strict'

const { test, trait } = use('Test/Suite')('Account')
const Account = use('App/Models/Account')

trait('Test/ApiClient')

test('store account and user', async ({ client }) => {
  const request = await client
    .post('accounts')
    .send({
      name: 'Account store test',
      type: 'seller',
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
    }).end()
    request.assertStatus(200)
})

test('get list of accounts', async ({ client }) => {

  const response = await client.get('/accounts?latitude=-16.523342&longitude=-50.380585').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    name: 'Account List name',
    type: 'seller',
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
    latitude: -16.523342,
    longitude: -50.380585
  }])
})
