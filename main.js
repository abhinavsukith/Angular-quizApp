angular.module('qApp', ['ngRoute', 'ui.materialize'])
		.controller('qcon', ['$scope','$http','$location',
			function($scope, $http, $location){
			var q = this;
			var sname = '';
			$scope.msg = 'false';
			//q.name = '';
			//q.pass = '';
			$scope.login =  function() {
				alert("hello");
				
			}

		}]);