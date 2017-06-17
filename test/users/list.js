const Lab = require('lab')
const Code = require('code')
const server = require('../../api.js')
const lab = exports.lab = Lab.script()

lab.experiment('API Tests', function () {
  // tests
  lab.test('GET /users/list', function (done) {
    var options = {
      method: 'GET',
      url: '/users/list'
    }
    // server.inject lets you similate an http request
    server.inject(options, function (response) {
      Code.expect(response.statusCode).to.equal(200) //  Expect http response status code to be 200 ("Ok")
      done()
    })
  })
})
