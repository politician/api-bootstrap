var Joi = require('@hapi/joi')

// Options can be passed to plugins on registration
exports.plugin = {
  name: 'account/goodbye', // Must be unique
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'POST',
      path: '/account/goodbye',
      config: {
        tags: ['api', 'account', 'goodbye'],
        description: 'Say goodbye',
        notes: 'Say goodbye to someone',
        validate: {
          payload: {
            yourname: Joi.string().required().max(40).min(2).default('John')
          }
        }
      },
      handler: function (req, h) {
        return {
          statusCode: 200,
          message: 'Goodbye ' + req.payload.yourname + '!'
        }
      }
    })
  }
}
