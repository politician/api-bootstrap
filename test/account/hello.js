const Lab = require('@hapi/lab')
const Code = require('@hapi/code')
const server = require('../../api.js')
const lab = exports.lab = Lab.script()

lab.experiment('Hello Tests', function () {
  // tests
  lab.test('POST /account/hello', function (done) {
    var options = {
      method: 'POST',
      url: '/account/hello',
      payload: {
        yourname: 'John'
      }
    }

    // server.inject lets you similate an http request
    server.inject(options, function (response) {
      Code.expect(response.statusCode).to.equal(200) //  Expect http response status code to be 200 ("Ok")
      Code.expect(response.result.message).to.have.length(11) // Expect result to be "Hello John!" (11 chars long)
      done()
    })
  })
})
