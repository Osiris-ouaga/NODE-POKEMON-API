const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const Sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

    Sequelize.initDb()

    require('./src/routes/findAllPokemons')(app)

app.listen(port, () => console.log(`Notre application Node est démarée sur : http://localhost:${port}`))
