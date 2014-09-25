(function() {
  var App, lodash;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  lodash = (function() {
    function lodash() {
      return window._;
    }

    return lodash;

  })();

  angular.module('lodash', App()).factory('lodash', [lodash]);

}).call(this);
