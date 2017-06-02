angular.module('qApp')
		.controller('adcon', function($scope){
	    //$http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

	    	$scope.msg= 'true';
	    	$scope.gc = function(){
	    		$scope.msg = !$scope.msg;
	    	}		
	    	});