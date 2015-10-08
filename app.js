// ================ Base Setup ========================
// Include Hapi package
var Hapi            = require('hapi'),
    Inert           = require('inert'),
    Vision          = require('vision'),
    HapiSwagger     = require('hapi-swagger'),
    Pack            = require('./package'),
    CFEnv           = require('cfenv');

// Create Server Object
var server = new Hapi.Server();

// Define PORT number
server.connection({port: 7002});

// Define Swagger options
var swaggerOptions = {
    apiVersion: Pack.version
};

// Register Swagger Plugin ( Use for documentation and testing purpose )
server.register([
    Inert,
    Vision,
    {
        register: HapiSwagger,
        options: swaggerOptions
    }], function (err) {
        if (err) {
            server.log(['error'], 'hapi-swagger load error: ' + err)
        } else {
            server.log(['start'], 'hapi-swagger interface loaded')
        }
    }
);

// =============== Routes for our API =======================
// Define GET route
server.route({
    method: 'GET',      // Methods Type
    path: '/api/user',  // Url
    config: {           // Swagger
        tags: ['api'],
        description: 'Get All User data',
        notes: 'Get All User data'
    },
    handler: function (request, reply) { //Action

        // Response JSON object
        reply({
            statusCode: 200,
            message: 'Getting All User Data',
            data: [
                {
                    name:'Kashish',
                    age:24
                },
                {
                    name:'Shubham',
                    age:21
                },
                {
                    name:'Jasmine',
                    age:24
                }
            ]
        });
    }
});

// =============== Start our Server =======================
// Lets start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
