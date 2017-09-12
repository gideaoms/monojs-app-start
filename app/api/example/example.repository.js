const ExampleModel = require('./example.model')

class ExampleRepository {

    constructor () {
        this.ExampleModel = new ExampleModel()
    }

    index (page) {
        return this.ExampleModel
            .paginate({limit: 3, page})
    }

    show (id) {
        return this.ExampleModel
            .findOne({_id: id})
    }

    store (data) {
        return this.ExampleModel
            .create(data)
    }

    update (id, data) {
        return this.ExampleModel
            .findOneAndUpdate({_id: id}, data)
    }

    destroy (id) {
        return this.ExampleModel
            .findOneAndRemove({_id: id})
    }

}

module.exports = ExampleRepository