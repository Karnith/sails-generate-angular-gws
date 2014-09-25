(function() {
  var App, socketIOClient;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  socketIOClient = (function() {
    function socketIOClient() {
      return {
        url: 'http://localhost:1337'
      };
    }

    return socketIOClient;

  })();

  angular.module('socket', App()).factory('socketIOClient', [socketIOClient]);

}).call(this);
