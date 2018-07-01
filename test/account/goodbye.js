const Lab = require('lab')
const Code = require('code')
const server = require('../../api.js')
const lab = exports.lab = Lab.script()

lab.experiment('Goodbye Tests', function () {
  // tests
  lab.test('POST /account/goodbye', function (done) {
    var options = {
      method: 'POST',
      url: '/account/goodbye',
      payload: {
        yourname: "John"
      }
    }

    // server.inject lets you similate an http request
    server.inject(options, function (response) {
      Code.expect(response.statusCode).to.equal(200) //  Expect http response status code to be 200 ("Ok")
      Code.expect(response.result.message).to.have.length(13) // Expect result to be "goodbye John!" (11 chars long)
      done()
    })
  })
})
