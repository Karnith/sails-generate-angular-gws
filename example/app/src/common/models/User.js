(function() {
  var App, UserModel;

  App = (function() {
    function App() {
      return ["lodash", "services", "ngSails"];
    }

    return App;

  })();

  UserModel = (function() {
    function UserModel($q, lodash, utils, $sails) {
      this.getAll = function() {
        var deferred, url;
        deferred = $q.defer();
        url = utils.prepareUrl("user");
        $sails.get(url, function(models) {
          return deferred.resolve(models);
        });
        return deferred.promise;
      };
      this.getOne = function(id) {
        var deferred, url;
        deferred = $q.defer();
        url = utils.prepareUrl("user/" + id);
        $sails.get(url, function(model) {
          return deferred.resolve(model);
        });
        return deferred.promise;
      };
      this.create = function(newModel) {
        var deferred, url;
        deferred = $q.defer();
        url = utils.prepareUrl("user");
        $sails.post(url, newModel, function(model) {
          return deferred.resolve(model);
        });
        return deferred.promise;
      };
    }

    return UserModel;

  })();

  angular.module('models.user', App()).service('UserModel', ['$q', 'lodash', 'utils', '$sails', UserModel]);

}).call(this);
