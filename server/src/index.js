const fastify = require('fastify')
const autoload = require('@fastify/autoload')
const path = require('path')
require('dotenv').config()

const server = fastify({logger: true})

const start = async () => {
  server.register(require('@fastify/multipart'))
  server.register(autoload, {
    dir: path.join(__dirname, 'routes'),
  })
  server.listen({port: process.env.port || 8000})
}
start()
