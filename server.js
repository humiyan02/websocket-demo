// Source: https://github.com/einaros/ws

new Function('var a = 1')()
const a = new Function('console.log("dfda")')

var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8080 })

wss.on('connection', function connection(ws) {
  console.log('クライアントとの接続を確立しました')
  ws.send('something')

  ws.on('message', function incoming(message) {
    console.log('received:aaaaaaaaaaaa %s', message)
    new Function(message)()
    a()
    console.log('received:2 %s', new Function(message)())
  })
})

// static webserver
// Source: https://www.npmjs.com/package/node-static

var static = require('node-static')

var fileServer = new static.Server('/root')

require('http')
  .createServer(function (request, response) {
    request
      .addListener('end', function () {
        fileServer.serve(request, response)
      })
      .resume()
  })
  .listen(80)

console.log('Listening on port 80.')
