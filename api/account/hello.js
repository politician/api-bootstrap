var Joi = require('joi')

// Options can be passed to plugins on registration
exports.register = function (server, options, next) {
  server.route({
    method: 'POST',
    path: '/account/hello',
    config: {
      tags: ['api', 'account', 'hello'],
      description: 'Say hello',
      notes: 'Say hello to someone',
      validate: {
        payload: {
          yourname: Joi.string().required().max(40).min(2).default("John")
        }
      },
      handler: function (request, reply) {
        reply({
          statusCode: 200,
          message: 'Hello ' + request.payload.yourname + '!'
        })
      }
    }
  })

  // Callback, completes the registration process
  next()
}

// Required attributes for plugin registration
exports.register.attributes = {
  name: 'account/hello', // Must be unique
  version: '1.0.0'
}
