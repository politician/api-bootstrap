const Lab = require('lab')
const Code = require('code')
const server = require('../api.js')
const lab = exports.lab = Lab.script()

lab.experiment('Hello Tests', function () {
  // tests
  lab.test('GET /api/hello/{yourname*}', function (done) {
    var options = {
      method: 'GET',
      url: '/hello/Timmy'
    }

    // server.inject lets you similate an http request
    server.inject(options, function (response) {
      Code.expect(response.statusCode).to.equal(200) //  Expect http response status code to be 200 ("Ok")
      Code.expect(response.result.message).to.have.length(14) // Expect result to be "Hello Timmy!" (12 chars long)
      done()
    })
  })
})
