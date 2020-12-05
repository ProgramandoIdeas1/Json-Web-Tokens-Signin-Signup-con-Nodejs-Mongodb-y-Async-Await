const express = require('express')
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(require('./controllers/authController'))

module.exports = app