'use strict'

const { test } = use('Test/Suite')('Create Roles')
const Role = use('Adonis/Acl/Role')
test('criar roles', async ({ client }) => {
  const master = await Role.create({
    name: 'Master',
    slug: 'master',
    description: 'manage master privileges'
  })
  const admin = await Role.create({
    name: 'Administrator',
    slug: 'administrator',
    description: 'manage administration privileges'
  })
  const seller = await Role.create({
    name: 'Seller',
    slug: 'seller',
    description: 'manage seller privileges'
  })
 const customer =  await Role.create({
    name: 'Customer',
    slug: 'customer',
    description: 'manage customer privileges'
  })
})
