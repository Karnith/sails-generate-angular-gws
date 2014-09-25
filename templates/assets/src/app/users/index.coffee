class App extends App('sailng.users')
  constructor: ->
    return []

class Config extends Config('sailng.users')
  constructor: ($stateProvider)->
    $stateProvider.state 'users',
      url: '/users'
      views:
        main:
          controller: 'UserCtrl'
          templateUrl: 'users/index.tpl.html'
      data:
        pageTitle: 'Users'

class UserCtrl extends Controller('sailng.users')
  constructor: ($scope, $sails, lodash, config, titleService, UserModel, $filter, ngTableParams)->
    $scope.newUser = {}
    $scope.users = []
    $scope.currentUser = config.currentUser

    $scope.destroyUser = (user) ->
      UserModel.deleteUser(user).then (model) ->
        lodash.remove($scope.todos, {id: todo.id})

    $scope.createUser = (newUser) ->
      console.log 'new ', newUser
      newUser.user = config.currentUser.id
      UserModel.create(newUser).then (model) ->
        $scope.newUser.title = ""

    UserModel.getAll($scope).then (models) ->
#      console.log $scope
      $scope.users = models.data
      data = $scope.users
      console.log "data ", data
      $scope.tableParams = new ngTableParams(
        page: 1 # show first page
        count: 25 # count per page
        sorting:
          title: "asc"
      ,
        total: data.length
        getData: ($defer, params) ->
          orderedData = (if params.sorting() then $filter("orderBy")(data, $scope.tableParams.orderBy()) else data)
          $defer.resolve orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
      )
