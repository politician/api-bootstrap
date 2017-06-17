if (process.env.NEW_RELIC_LICENSE_KEY) { require('newrelic') }
const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Pack = require('./package')
const HapiSwagger = require('hapi-swagger')

// Create Server Object
const server = new Hapi.Server()

// Define PORT number
server.connection({host: '0.0.0.0', port: (~~process.env.PORT || 3000)})

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
    { register: require('./api/index') },
    { register: require('./api/account/hello') },
    { register: require('./api/account/goodbye') },
    { register: require('./api/users/list') }
]

// Register Swagger Plugin ( Use for documentation and testing purpose )
server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: options
  }],
  function (err) {
    if (err) {
      server.log(['error'], 'hapi-swagger load error: ' + err)
    } else {
      server.log(['start'], 'hapi-swagger interface loaded')
    }
  })

// =============== Start our Server =======================
// Register plugins, and start the server if none of them fail
server.register(plugins, function (err) {
  if (err) { throw err }

  server.start(function () {
    console.log('Server running at:', server.info.uri)
    console.log('Documentation available at:', server.info.uri + '/documentation')
  })
})

module.exports = server
