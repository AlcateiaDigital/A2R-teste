'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')
const Role = use('Adonis/Acl/Role')
trait('Test/ApiClient')

test('store user', async ({ client }) => {
  const response = await client
    .post('users')
    .send({
      first_name: 'Adham',
      last_name: 'Wynston',
      password: '123456',
      email: 'adham@adham.com',
      'status': true
    }).end()
    response.assertStatus(200)
})
