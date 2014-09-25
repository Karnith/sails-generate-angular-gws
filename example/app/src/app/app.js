(function() {
  var App, AppCtrl, Run, myAppConfig;

  App = (function() {
    function App() {
      return ["ui.router", "ngSails", "angularMoment", "lodash", "ui.bootstrap", "templates-app", "services", "models", "ngTable", "directives", "sailng.header", "sailng.home", "sailng.about"];
    }

    return App;

  })();

  myAppConfig = (function() {
    function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }

    return myAppConfig;

  })();

  Run = (function() {
    function Run() {
      moment.locale("en");
    }

    return Run;

  })();

  AppCtrl = (function() {
    function AppCtrl($scope, config) {
      config.currentUser = window.currentUser;
    }

    return AppCtrl;

  })();

  angular.module('sailng', App()).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', myAppConfig]).run([Run]).controller('AppCtrl', ['$scope', 'config', AppCtrl]);

}).call(this);
