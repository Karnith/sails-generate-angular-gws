class App extends App('socket')
  constructor: ->
    return []

class socketIOClient extends Factory('socket')
  constructor: ->
    return {
      url: 'http://localhost:1337'
    }