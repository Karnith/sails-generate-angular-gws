(function() {
  var App, blink;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  blink = (function() {
    function blink($timeout) {
      return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope, $element) {
          var hideElement, showElement;
          showElement = (function() {
            function showElement() {
              $element.css("display", "inline");
              $timeout(hideElement, 1000);
            }

            return showElement;

          })();
          hideElement = (function() {
            function hideElement() {
              $element.css("display", "none");
              $timeout(showElement, 1000);
            }

            return hideElement;

          })();
          return showElement();
        },
        template: '<span ng-transclude></span>',
        replace: true
      };
    }

    return blink;

  })();

  angular.module('directive.blink', App()).directive('blink', ['$timeout', blink]);

}).call(this);
