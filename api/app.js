const express = require('express')
require('dotenv').config() //importing dotenv for the .env
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const actionRoutes = require('./routes/actions')
const port = process.env.PORT
const app = express() // Creating the API
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(bodyParser.json({ limit: "1kb" }))
app.use((req, res, next) => { // adding headers
  res.setHeader('Access-Control-Allow-Origin', '*') // allow request from any port
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization') // alow to had those headers for a request
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS') // allowing those types of request
  next()
})

// all the routes
app.use('/auth', authRoutes)
app.use('/actions', actionRoutes)

module.exports = app