(function() {
  var App, titleService;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  titleService = (function() {
    function titleService($document) {
      var suffix, title;
      suffix = title = " - MEANS Seed Project";
      return {
        setSuffix: function(s) {
          return suffix = s;
        },
        getSuffix: function() {
          return suffix;
        },
        setTitle: function(t) {
          if (suffix !== "") {
            title = t + suffix;
          } else {
            title = t;
          }
          return $document.prop("title", title);
        },
        getTitle: function() {
          return $document.prop("title");
        }
      };
    }

    return titleService;

  })();

  angular.module('services.title', App()).factory('titleService', ['$document', titleService]);

}).call(this);
