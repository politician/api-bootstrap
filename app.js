// ================ Base Setup ========================
// Include Hapi package
var Hapi            = require('hapi'),
    Inert           = require('inert'),
    Vision          = require('vision'),
    Joi             = require('joi'),
    HapiSwagger     = require('hapi-swagger'),
    Pack            = require('./package'),
    CFEnv           = require('cfenv');

// Create Server Object
var server = new Hapi.Server();

// Define PORT number
server.connection({host: 'localhost', port: 7002});

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
            server.log(['error'], 'hapi-swagger load error: ' + err);
        } else {
            server.log(['start'], 'hapi-swagger interface loaded');
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

server.route({
    method: 'GET',
    path: '/hello/{yourname*}',
    config: {
        tags: ['api'],
        description: 'Say hello',
        notes: 'Say hello to someone',
        validate: {
            params: {
                yourname: Joi.string().max(40).min(2).alphanum()
            }
        },
        handler: function (req,reply) {
            reply({message: 'Hello '+ req.params.yourname + '!'})
        }
    }
});

// =============== Start our Server =======================
// Lets start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});

module.exports = server;
