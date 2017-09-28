'use strict';

angular.module('myApp.series', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tv', {
    templateUrl: 'series/series.html',
    controller: 'SeriesController'
  });
}])

.controller('SeriesController', ['$scope', 'loader', function($scope,loader) {
	
	loader.success(function(data){
		$scope.shows= data.results;
	});
	

}]);