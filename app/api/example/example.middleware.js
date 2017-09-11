class ExampleMiddleware {

    testMiddlewareFromExample (request, response, next) {
        console.log('Passed in the middleware from ExampleMiddleware')
        next()
    }

}

module.exports = ExampleMiddleware