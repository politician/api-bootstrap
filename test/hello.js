var Lab = require("lab");
var lab = exports.lab = Lab.script();
var Code = require("code");
var server = require("../app.js");

lab.experiment("Hello Tests", function() {
    // tests
    lab.test("GET /hello/{yourname*}", function(done) {
        var options = {
            method: "GET",
            url: "/hello/Timmy"
        };
        // server.inject lets you similate an http request
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
            Code.expect(response.result.message).to.have.length(12); // Expect result to be "Hello Timmy!" (12 chars long)
            done();
        });
    });
});