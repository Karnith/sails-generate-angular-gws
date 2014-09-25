class App extends App('models.user')
  constructor: ->
    return [
      "lodash"
      "services"
      "ngSails"
    ]

class UserModel extends Service('models.user')
  constructor: ($q, lodash, utils, $sails) ->
    @getAll = ->
      deferred = $q.defer()
      url = utils.prepareUrl("user")
      $sails.get url, (models) ->
        deferred.resolve models
      deferred.promise

    @getOne = (id) ->
      deferred = $q.defer()
      url = utils.prepareUrl("user/" + id)
      $sails.get url, (model) ->
        deferred.resolve model
      deferred.promise

    @create = (newModel) ->
      deferred = $q.defer()
      url = utils.prepareUrl("user")
      $sails.post url, newModel, (model) ->
        deferred.resolve model
      deferred.promise