class App extends App('sailng.home')
  constructor: ->
    return []

class Config extends Config('sailng.home')
  constructor: ($stateProvider)->
    $stateProvider.state 'home',
      url: '/'
      views:
        main:
          controller: 'HomeCtrl'
          templateUrl: 'home/index.tpl.html'

class HomeCtrl extends Controller('sailng.home')
  constructor: ($scope, titleService)->
    titleService.setTitle 'Home'
