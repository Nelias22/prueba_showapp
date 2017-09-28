'use strict';

angular.module('myApp.movies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movie', {
    templateUrl: 'movies/movies.html',
    controller: 'MovieController'
  });
}])

.controller('MovieController', ['$scope', '$route', 'loader', function($scope, $route, loader) {


	loader.success(function(data){

		$scope.movies= data.results;

	});

	

}]);