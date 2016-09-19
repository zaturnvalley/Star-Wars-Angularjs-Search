angular.module('StarWarsApp', ['StarWarsCtrls', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('films', {
    url: '/',
    templateUrl: 'views/films.html',
    controller: 'FilmsCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  .state('showFilm', {
    url: '/films/:id',
    templateUrl: 'views/filmShow.html',
    controller: 'FilmShowCtrl'
  });

  // $locationProvider.html5mode(true);
}]);