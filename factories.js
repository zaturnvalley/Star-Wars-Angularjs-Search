angular.module('StarWarsFactories', ['ngResource'])
.factory('Films', ['$resource', function($resource) {
  return $resource('http://swapi.co/api/films/:id', {}, {
    query: { isArray: false }
  });
}]);