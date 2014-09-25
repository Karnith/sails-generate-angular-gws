class App extends App('directive.blink')
  constructor: ->
    return []

class blink extends Directive('directive.blink')
  constructor: ($timeout) ->
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: ($scope, $element)->
        class showElement
          constructor: ->
            $element.css("display", "inline")
            $timeout(hideElement, 1000)

        class hideElement
          constructor: ->
            $element.css("display", "none")
            $timeout(showElement, 1000)
        showElement()
      template: '<span ng-transclude></span>',
      replace: true
    }