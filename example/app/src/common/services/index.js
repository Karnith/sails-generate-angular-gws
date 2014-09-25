(function() {
  var App;

  App = (function() {
    function App() {
      return ["services.config", "services.utils", "services.title", "lodash"];
    }

    return App;

  })();

  angular.module('services', App());

}).call(this);
