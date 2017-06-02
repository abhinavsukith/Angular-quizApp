angular.module('qApp')
		.controller('userlogcon', ['$scope','$http','$location', function($scope, $http, $location){
			    $http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
			$scope.tag = '';

			$scope.uname = '';
			$scope.pass = '';
			
			$scope.userlogin = function(){
				alert('hello');
				$http.post('login.php', {'uname': $scope.uname, 'pass': $scope.pass  })
				.success(function(response){
				//console.log(data[1]);
				//$scope.tag = data;
				alert(response);
				$scope.msg = response[1];
					console.log($scope.msg);
					//sname = window.sVar;
					if ($scope.msg=="t") {
						console.log($scope.msg);
						//myService.set($scope.uname);
						//alert(sname);
						$location.path("/dashboard" );

					}
					else{
						$location.path("/wrong" );	
					};
					     
			}).error(function(error){
				//console.log(error);
				//$scope.tag = error;
				alert(error);
			});
				
			}


		}]);