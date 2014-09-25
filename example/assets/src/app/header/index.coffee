class App extends App('sailng.header')
  constructor: ->
    return []

class HeaderCtrl extends Controller('sailng.header')
  constructor: ($scope, $state, config)->
    $scope.currentUser = config.currentUser
    navItems = [
      title: "About"
      translationKey: "navigation:about"
      url: "/about"
      cssClass: "fa fa-tasks fa-lg"
    ]
    $scope.navItems = navItems