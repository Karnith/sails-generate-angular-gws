class App extends App('lodash')
  constructor: ->
    return []

class lodash extends Factory('lodash')
  constructor: ->
    return window._ # assumes lodash has already been loaded on the page