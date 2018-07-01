// Options can be passed to plugins on registration
exports.plugin = {
  name: 'api/', // Must be unique
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/',
      config: {
        tags: ['api'],
        description: 'Root of the API',
        notes: 'This is the root of the api'
      },
      handler: function (req, h) {
        return {
          version: '1.0.0',
          message: 'Now head to /documentation to see all the commands available'
        }
      }
    })
  }
}
