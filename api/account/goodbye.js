var Joi = require('joi')

// Options can be passed to plugins on registration
exports.register = function (server, options, next) {
  server.route({
    method: 'POST',
    path: '/account/goodbye',
    config: {
      tags: ['api', 'account', 'goodbye'],
      description: 'Say goodbye',
      notes: 'Say goodbye to someone',
      validate: {
        payload: {
          yourname: Joi.string().required().max(40).min(2).default("John")
        }
      },
      handler: function (request, reply) {
        reply({
          statusCode: 200,
          message: 'Goodbye ' + request.payload.yourname + '!'
        })
      }
    }
  })

  // Callback, completes the registration process
  next()
}

// Required attributes for plugin registration
exports.register.attributes = {
  name: 'account/goodbye', // Must be unique
  version: '1.0.0'
}
