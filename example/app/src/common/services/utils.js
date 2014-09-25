(function() {
  var App, utils;

  App = (function() {
    function App() {
      return ['lodash'];
    }

    return App;

  })();

  utils = (function() {
    function utils(lodash, config) {
      return {
        prepareUrl: function(uriSegments) {
          var apiUrl;
          if (lodash.isNull(config.apiUrl)) {
            apiUrl = "https://api.test";
          } else {
            apiUrl = config.apiUrl;
          }
          return apiUrl + "/" + uriSegments;
        },
        showDatetime: function(string, format) {
          return moment(string).fromNow();
        }
      };
    }

    return utils;

  })();

  angular.module('services.utils', App()).service('utils', ['lodash', 'config', utils]);

}).call(this);
