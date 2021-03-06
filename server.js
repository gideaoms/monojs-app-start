const monojs = require('monojs')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

monojs.bootstrap(app)
    .then(port => console.info(`server runinng. Port: ${port}`))
    .catch(error => console.error(error))