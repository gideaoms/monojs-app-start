const { Model } = require('monojs')

class ExampleModel extends Model {

    tableName () {
        return 'Example'
    }

    attributes () {
        return {
            name: {
                type: String,
                required: true
            },
            year: {
                type: String,
                required: true
            }
        }
    }

}

module.exports = ExampleModel