const express = require('express')
const app = express()
const cors = require('cors')
const usuario = require('./Controller/usuarioController')
const bd = require('./Database/sqlite')


app.use(express.json())
app.use((req, res, next) => {
    next()
})

app.use(cors())


usuario(app,bd)


module.exports = app