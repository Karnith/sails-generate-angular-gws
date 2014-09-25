(function() {
  var AboutCtrl, App, config;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  config = (function() {
    function config($stateProvider) {
      $stateProvider.state('about', {
        url: '/about',
        views: {
          main: {
            controller: 'AboutCtrl',
            templateUrl: 'about/index.tpl.html'
          }
        }
      });
    }

    return config;

  })();

  AboutCtrl = (function() {
    function AboutCtrl($scope, titleService) {
      titleService.setTitle('About');
    }

    return AboutCtrl;

  })();

  angular.module('sailng.about', App()).config(['$stateProvider', config]).controller('AboutCtrl', ['$scope', 'titleService', AboutCtrl]);

}).call(this);
