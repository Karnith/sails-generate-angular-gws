(function() {
  var App, Config, HomeCtrl;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  Config = (function() {
    function Config($stateProvider) {
      $stateProvider.state('home', {
        url: '/',
        views: {
          main: {
            controller: 'HomeCtrl',
            templateUrl: 'home/index.tpl.html'
          }
        }
      });
    }

    return Config;

  })();

  HomeCtrl = (function() {
    function HomeCtrl($scope, titleService) {
      titleService.setTitle('Home');
    }

    return HomeCtrl;

  })();

  angular.module('sailng.home', App()).config(['$stateProvider', Config]).controller('HomeCtrl', ['$scope', 'titleService', HomeCtrl]);

}).call(this);
