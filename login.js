angular.module('qApp')
		.controller(function($scope, $http){
	    $http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

	    	$scope.login = function(){
	    		$http.post('login.php', {'uname': $scope.uname, 'password': $scope.pass});
	    		
	    	}
		});