// Options can be passed to plugins on registration
exports.register = function (server, options, next) {
  server.route({
    method: 'GET', // Methods Type
    path: '/users/list', // Url
    config: { // Swagger
      tags: ['api', 'users', 'list'],
      description: 'Get All Users',
      notes: 'Get All Users'
    },
    handler: function (request, reply) { // Action
      // Response JSON object
      reply({
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
      })
    }
  })

  // Callback, completes the registration process
  next()
}

// Required attributes for plugin registration
exports.register.attributes = {
  name: 'users/list', // Must be unique
  version: '1.0.0'
}
