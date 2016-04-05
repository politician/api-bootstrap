var Joi = require('joi')

// Options can be passed to plugins on registration
exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/api/hello/{yourname*}',
    config: {
      tags: ['api'],
      description: 'Say hello',
      notes: 'Say hello to someone',
      validate: {
        params: {
          yourname: Joi.string().max(40).min(2).alphanum()
        }
      },
      handler: function (req, reply) {
        reply({message: 'Bonjour ' + req.params.yourname + '!'})
      }
    }
  })

  // Callback, completes the registration process
  next()
}

// Required attributes for plugin registration
exports.register.attributes = {
  name: 'api/hello', // Must be unique
  version: '1.0.0'
}
