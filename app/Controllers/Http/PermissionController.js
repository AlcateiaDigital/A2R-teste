

const Permission = use('Permission')

class PermissionController {

    async index({ request }) {

        const permissions = Permission
            .query()
            .fetch()

        return permissions
    }

    async store({ request }) {

        const data = request.only(['name', 'slug', 'description'])

        const permission = await Permission.create(data)

        return permission
    }
}

module.exports = PermissionController
