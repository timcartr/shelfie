const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./controller')

const connectionString = process.env.CONNECTION_STRING

const app = express()
app.use(bodyParser.json())

const port = process.env.SERVER_PORT

// ENDPOINTS
app.get('/api/inventory', ctrl.read)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)
app.put('/api/product/:id', ctrl.update)

massive(connectionString).then( connection => {
    app.set('db', connection)
    app.listen( port, () => {
        console.log(`Started server on port: ${port}`)
    })
}).catch(err => console.log(err))