angular.module('myApp.search', [])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}])


.service('search', ['$http', '$location', function($http,$location) {

           var baseUrl='https://api.themoviedb.org/3/search';
           var anyDefault= $location.path();
           var apiKey= '?api_key=8d885ab6eebafcda314b7fd2ff1f4fc5';
           var request= baseUrl+anyDefault+apiKey+'&query=';
           var query=encodeURI(word);
          

            $http({
              method: 'GET',
              url: request+query
          }).then(function successCallback(data) {
              $scope.result= data.result;
          }, function errorCallback(data) {
                return data;
          });


            
    
         
  	     

}]);