angular.module('StarWarsCtrls', ['StarWarsFactories', 'StarWarsServices'])
.controller('FilmsCtrl', ['$scope', 'Films', 'JarJar', function($scope, Films, JarJar) {
  $scope.films = [];
  $scope.loading = true;

  console.log("JarJar's Favorites:", JarJar.favorites)

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

  $scope.addToFavs = function(filmObj) {
    JarJar.favorites.push(filmObj);
    console.log(JarJar.favorites);
  }

  $scope.showAll();
}])
.controller('JarJarCtrl', ['$scope', 'JarJar', function($scope, JarJar) {
  $scope.favorites = JarJar.favorites;
}]);