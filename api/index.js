// Options can be passed to plugins on registration
exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    config: {
      tags: ['api'],
      description: 'Root of the API',
      notes: 'This is the root of the api'
    },
    handler: function (req, reply) {
      reply({version: '1.0.0',
          message: 'Now head to /documentation to see all the commands available'
      })
    }
  })

  // Callback, completes the registration process
  next()
}

// Required attributes for plugin registration
exports.register.attributes = {
  name: 'api/', // Must be unique
  version: '1.0.0'
}
