(function() {
  var App, HeaderCtrl;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  HeaderCtrl = (function() {
    function HeaderCtrl($scope, $state, config) {
      var navItems;
      $scope.currentUser = config.currentUser;
      navItems = [
        {
          title: "About",
          translationKey: "navigation:about",
          url: "/about",
          cssClass: "fa fa-tasks fa-lg"
        }
      ];
      $scope.navItems = navItems;
    }

    return HeaderCtrl;

  })();

  angular.module('sailng.header', App()).controller('HeaderCtrl', ['$scope', '$state', 'config', HeaderCtrl]);

}).call(this);
