'use strict'

const { test, trait } = use('Test/Suite')('Seller')
trait('Test/ApiClient')

test('store seller', async ({ client }) => {
  const auth = await client
  .post('oauth/token')
  .send({
    email: "seller@food.com",
    password: "123456"
  })
  const request = await client
    .post('sellers')
    .header('Authorization', `${auth.type} ${auth.token}`)
    .send({
      type: "Italiana",
      subtitle: "A melhor massa",
      name: "Maccheroni Massas",
      phone_1: "7242652642",
      minimum_handling_time: 40,
      maximum_handling_time: 50
    }).end()
    request.assertStatus(200)
})
