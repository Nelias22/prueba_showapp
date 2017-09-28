'use strict';

angular.module('myApp.favorites', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/favorites', {
    templateUrl: 'favorites/favorites.html',
    controller: 'FavoritesController'
  });
}])

.controller('FavoritesController', [function() {

}]);