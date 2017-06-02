	angular.module('qApp')
		.controller('qcon', ['$scope','$http','$location', function($scope, $http, $location){
			//$http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
			$scope.name = '';
			$scope.time = 0;
			$scope.marks = 0;

			$scope.createquiz =  function(){
				$http.post('quiz.php', {
					'name': $scope.name,
					'time': $scope.time, 
					'marks': $scope.marks}).
				success(function(response){
					//alert(response);
					$location.path("/postquiz" );
					//$route.reload();
				}).error(function(error){
					alert(error);
				});
			}
		}]);