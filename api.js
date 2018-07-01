if (process.env.NEW_RELIC_LICENSE_KEY) { require('newrelic') }
const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Pack = require('./package')
const HapiSwagger = require('hapi-swagger')

// Create Server Object
const server = new Hapi.Server({host: '0.0.0.0', port: (~~process.env.PORT || 3000)})

// Define Swagger options
const options = {
  payloadType: 'form',
  info: {
    'title': Pack.name + ' API Documentation',
    'version': Pack.version,
    'description': Pack.description,
    'contact': {
      'name': Pack.author
    },
    'license': {
      'name': Pack.license
    }
  },
  tags: [
    {
      'name': 'account',
      'description': 'Access account data'
    }, {
      'name': 'users',
      'description': 'Access user data'
    }
  ]
}

// Declare plugins
const plugins = [
  {plugin: HapiSwagger, options: options},
  Inert,
  Vision,
  require('./api/index'),
  require('./api/account/hello'),
  require('./api/account/goodbye'),
  require('./api/users/list')
]

const init = async () => {
  await server.register(plugins)
  await server.start()
  console.log('Server running at:', server.info.uri)
  console.log('Documentation available at:', server.info.uri + '/documentation')
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()

module.exports = server
