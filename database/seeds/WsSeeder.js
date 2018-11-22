'use strict'

/*
|--------------------------------------------------------------------------
| AclSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')
const User = use('App/Models/User')

class WsSeeder {
  async run () {
    const userMaster = await User.find(1)
    const userSeller = await User.find(2)
    const userCustomer = await User.find(3)
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
    await userMaster.roles().attach([master.id])
    await userSeller.roles().attach([seller.id])
    await userCustomer.roles().attach([customer.id])

    const createAccountPermission  =  await Permission.create({
      slug : 'create_accounts',
      name: 'Create Accounts',
      description: 'create accounts permission'
    })
    const updateAccountPermission  =  await Permission.create({
      slug : 'update_accounts',
      name: 'Update Accounts',
      description: 'update accounts permission'
    })
    const deleteAccountPermission  =  await Permission.create({
      slug : 'delete_accounts',
      name: 'Delete Accounts',
      description: 'delete accounts permission'
    })

    await master.permissions().attach([
      createAccountPermission.id,
      updateAccountPermission.id,
      deleteAccountPermission.id,
    ])
    await userMaster.permissions().attach([
      createAccountPermission.id,
      updateAccountPermission.id,
      deleteAccountPermission.id,
    ])
  }
}

module.exports = WsSeeder
