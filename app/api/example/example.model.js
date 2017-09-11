const mongoose = require('mongoose')

const Example = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Example', Example)