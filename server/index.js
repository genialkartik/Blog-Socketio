const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 2020

const router = require('./router')

const server = http.createServer(app)
const io = socketio(server)

app.use(cors())

let map = new Map()
let map2 = new Map()
map.set(1, 0)
map.set(2, 0)
map.set(3, 0)
map.set(4, 0)
map.set(5, 0)
io.on('connect', (socket) => {
  console.log('socket connection connected')
  socket.on('showBlog', ({ id }, callback) => {
    map2.set(socket.id, Number(id));
    map.set(Number(id), map.get(Number(id)) + 1);
    callback(map.get(Number(id)))
  })
  socket.on('disconnect', () => {
    console.log('socket connection disconnected')
    var blogid= Number(map2.get(socket.id))
    map.set(blogid, map.get(Number(map2.get(socket.id))) - 1)
    map2.delete(socket.id)
})
})

app.use(router)

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})