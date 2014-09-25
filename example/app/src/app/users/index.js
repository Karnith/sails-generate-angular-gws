(function() {
  var App, Config, UserCtrl;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  Config = (function() {
    function Config($stateProvider) {
      $stateProvider.state('users', {
        url: '/users',
        views: {
          main: {
            controller: 'UserCtrl',
            templateUrl: 'users/index.tpl.html'
          }
        },
        data: {
          pageTitle: 'Users'
        }
      });
    }

    return Config;

  })();

  UserCtrl = (function() {
    function UserCtrl($scope, $sails, lodash, config, titleService, UserModel, $filter, ngTableParams) {
      $scope.newUser = {};
      $scope.users = [];
      $scope.currentUser = config.currentUser;
      $scope.destroyUser = function(user) {
        return UserModel.deleteUser(user).then(function(model) {
          return lodash.remove($scope.todos, {
            id: todo.id
          });
        });
      };
      $scope.createUser = function(newUser) {
        console.log('new ', newUser);
        newUser.user = config.currentUser.id;
        return UserModel.create(newUser).then(function(model) {
          return $scope.newUser.title = "";
        });
      };
      UserModel.getAll($scope).then(function(models) {
        var data;
        $scope.users = models.data;
        data = $scope.users;
        console.log("data ", data);
        return $scope.tableParams = new ngTableParams({
          page: 1,
          count: 25,
          sorting: {
            title: "asc"
          }
        }, {
          total: data.length,
          getData: function($defer, params) {
            var orderedData;
            orderedData = (params.sorting() ? $filter("orderBy")(data, $scope.tableParams.orderBy()) : data);
            return $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          }
        });
      });
    }

    return UserCtrl;

  })();

  angular.module('sailng.users', App()).config(['$stateProvider', Config]).controller('UserCtrl', ['$scope', '$sails', 'lodash', 'config', 'titleService', 'UserModel', '$filter', 'ngTableParams', UserCtrl]);

}).call(this);
