// Options can be passed to plugins on registration
exports.plugin = {
  name: 'users/list', // Must be unique
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'GET', // Methods Type
      path: '/users/list', // Url
      config: { // Swagger
        tags: ['api', 'users', 'list'],
        description: 'Get All Users',
        notes: 'Get All Users'
      },
      handler: function (req, h) {
        return {
          statusCode: 200,
          message: 'Getting All Users',
          data: [
            {
              name: 'Kashish',
              age: 24
            },
            {
              name: 'Shubham',
              age: 21
            },
            {
              name: 'Jasmine',
              age: 24
            }
          ]
        }
      }
    })
  }
}
