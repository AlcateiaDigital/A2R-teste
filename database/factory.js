'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/Account', async (faker) => {
  return {
    name: faker.name(),
    type: faker.name(),
    document_type: 'cpf',
    resp_name: faker.name(),
    resp_document_type: 'cpf',
    resp_document_number: faker.cpf(),
    'legal_name': faker.last(),
    document_number: faker.cpf(),
    phone_1: faker.number(),
    phone_2: faker.number()
  }
})
Factory.blueprint('App/Models/Seller', async (faker) => {
  return {
    name: faker.name(),
    subtitle: faker.sentence({ words: 5 }),
    account_id: async () => {
      return (await Factory.model('App/Models/Account').create()).id
    },
    phone_1: faker.number(),
    phone_2: faker.number(),
    address_street: faker.street(),
    address_street_number: faker.geohash(),
    address_city:  faker.city(),
    address_state:  faker.state(),
    address_complement:  faker.state(),
    address_neighborhood:  faker.state(),
    address_country:  faker.state(),
    address_latitude:  faker.state(),
    address_altitude:  faker.state(),
    minimum_handling_time:  30,
    maximum_handling_time:  40,
  }
})
Factory.blueprint('App/Models/User', async (faker) => {
  return {
    first_name: faker.last(),
    last_name: faker.name(),
    account_id: async () => {
      return (await Factory.model('App/Models/Account').create()).id
    },
    phone_1: faker.number(),
    phone_2: faker.number(),
    email: faker.email(),
    password: '123456',
    status: true
  }
})
