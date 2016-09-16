angular.module('StarWarsCtrls', ['StarWarsFactories'])
.controller('FilmsCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.films = [];
  $scope.loading = true;
  $scope.showAll = function() {
    Films.query(function success(res) {
        console.log(res);
        $scope.films = res.results;
        $scope.loading = false;
    }, function error(res) {
        console.log(res);
    })
  }

  Films.query(function success(res) {
      console.log(res);
      $scope.films = res.results;
  }, function error(res) {
      console.log(res);
  })

  $scope.showMovie = function(url) {
    $scope.loading = true;
    var movieId = url[url.length - 2];
    Films.get({id: movieId}, function success(res) {
      console.log(res);
      $scope.films = [res];
      $scope.loading = false;
    }, function error(res) {
      console.log(res);
    });
  }

  $scope.showAll();
}]);