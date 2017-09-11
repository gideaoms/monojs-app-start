const ExampleModel = require('./example.model')

class ExampleRepository {

    index () {
        return ExampleModel
            .find({})
    }

    store (data) {
        return ExampleModel
            .create(data)
    }

}

module.exports = ExampleRepository