'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/Account', async (faker) => {
  return {
    name: faker.name(),
    type: 'seller',
    document_type: 'cpf',
    resp_name: faker.name(),
    resp_document_type: 'cpf',
    resp_document_number: faker.cpf(),
    legal_name: faker.last(),
    document_number: faker.cpf(),
    phone_1: faker.phone(),
    phone_2: faker.phone()
  }
})
Factory.blueprint('App/Models/Seller', async (faker, i, data) => {
  return {
    name: faker.name(),
    type: 'pizzaria',
    subtitle: faker.sentence({ words: 5 }),
    account_id: async () => {
      if (data.account_id) {
        return data.account_id
      }
      return (await Factory.model('App/Models/Account').create()).id
    },
    rating: faker.floating({min: 1, max: 5}),
    phone_1: faker.phone(),
    phone_2: faker.phone(),
    image_url: 'https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634124-stock-illustration-restaurant-logo-cutlery-design.jpg',
    address_street: faker.street(),
    address_street_number: faker.geohash(),
    address_city:  faker.city(),
    address_state:  faker.state(),
    address_complement:  faker.state(),
    address_neighborhood:  faker.state(),
    address_zipcode: '76100000',
    address_country:  'BR',
    address_latitude:  faker.latitude(),
    address_longitude:  faker.longitude(),
    minimum_handling_time:  30,
    maximum_handling_time:  40,
  }
})
Factory.blueprint('App/Models/User', async (faker) => {
  return {
    first_name: faker.first(),
    last_name: faker.last(),
    account_id: async () => {
      return (await Factory.model('App/Models/Account').create()).id
    },
    phone_1: faker.phone(),
    phone_2: faker.phone(),
    email: faker.email(),
    password: '123456',
    status: 'active'
  }
})
Factory.blueprint('App/Models/Category', async (faker) => {
  return {
    name: faker.last(),
    priority: faker.integer({min: 1, max: 10}),
    image_url: 'https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634124-stock-illustration-restaurant-logo-cutlery-design.jpg',
  }
})
Factory.blueprint('App/Models/MenuOption', async (faker) => {
  return {
    name: faker.last(),
    priority: faker.integer({min: 1, max: 10})
  }
})

Factory.blueprint('App/Models/Product', async (faker, i, data) => {
  return {
    name: faker.name(),
    description: faker.sentence({ words: 5}),
    price: faker.floating({ min: 0, max: 100, fixed: 2 }),
    status: 'active',
    category_id: 1
  }
})
