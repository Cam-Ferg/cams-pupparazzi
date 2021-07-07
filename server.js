const express = require('express')
const hbs = require('express-handlebars')

const { getPuppyData } = require('./utils')
const route = require('./puppyRoutes')

const server = express()

const template = 'home'

server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

module.exports = server

server.use('/puppies', route)

server.get('/', (req, res) => {
  getPuppyData(puppies => {
    res.render(template, puppies)
  })
})
