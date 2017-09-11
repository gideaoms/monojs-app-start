const ExampleRepository = require('./example.repository')

class ExampleController {

    constructor () {
        this.ExampleRepository = new ExampleRepository
    }

    index (request, response) {
        this.ExampleRepository
            .index()
            .then(examples => response.json(examples))
            .catch(err => response.json(err))
    }

    store (request, response) {
        console.log(request.body)

        this.ExampleRepository
            .store(request.body)
            .then(example => response.json(example))
            .catch(err => response.json(err))
    }

}

module.exports = ExampleController