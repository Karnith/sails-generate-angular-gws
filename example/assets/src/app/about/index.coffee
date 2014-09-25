class App extends App('sailng.about')
  constructor: ->
    return []

class config extends Config('sailng.about')
  constructor: ($stateProvider) ->
    $stateProvider.state 'about',
      url: '/about'
      views:
        main:
          controller: 'AboutCtrl'
          templateUrl: 'about/index.tpl.html'

class AboutCtrl extends Controller('sailng.about')
  constructor: ($scope, titleService) ->
    titleService.setTitle 'About'
