const express = require('express')
const http = require('http')
const path = require('path')



const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000


const pubDir = path.join(__dirname, '../pub')

app.use(express.static(pubDir))



server.listen(port)