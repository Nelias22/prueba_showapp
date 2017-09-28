angular.module('myApp.loader', [])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}])


.factory('loader', ['$http', '$location', function($http,$location) {
	
	var baseUrl='https://api.themoviedb.org/3';
	var anyDefault= $location.path();
	var apiKey= '?api_key=8d885ab6eebafcda314b7fd2ff1f4fc5';
	var request= baseUrl+anyDefault+'/popular'+apiKey;
  	
  		return $http.get(request)
  	         .success(function(data) {  	         
  	           return data;

  	           
  	         })
  	         .error(function(data) {
  	           return data;
  	         });

  	         
  	     

}]);