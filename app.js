const express = require('express')
const app = require('express')()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)

const fs = require('fs')

const ioServer = require('./modulos/io')
const monopolio = require('./modulos/monopolio')

ioServer.iniciar(io)

app.use(express.static(path.join(__dirname, 'pub')))
app.use(express.static(path.join(__dirname, 'pub/socket.io')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pub/index.html'))
})

http.listen(3000, () => {
  console.log('Ouvindo em 3000')
})