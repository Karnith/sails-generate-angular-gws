(function() {
  var App, config;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  config = (function() {
    function config(lodash) {
      return {
        siteName: "Sails Angular",
        siteUrl: "/",
        apiUrl: "/api",
        currentUser: false
      };
    }

    return config;

  })();

  angular.module('services.config', App()).service('config', ['lodash', config]);

}).call(this);
