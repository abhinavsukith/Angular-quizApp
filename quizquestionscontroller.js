angular.module('qApp').controller('quizQuestionController',function($scope, $http){
	var ee = this;
	var nameq = 'helloz';
	$scope.b = {};
	//$scope.qq = [];
	$http.get('get_quiz.php').success(function(response){
		console.log(response);
		$scope.quizques = response;
	});
	$scope.select_ = function(){
        		alert(nameq);
				$http.post('quiz_ques.php', {'question': $scope.question, 'option_one': $scope.option_one,
				'option_two': $scope.option_two, 'option_three': $scope.option_three,
				'option_four': $scope.option_four, 'option_correct': $scope.option_correct, 
				'belongsto': $scope.b
				}).
				success(function(response){
					alert(response);
				}).error(function(error){
					alert(error);
				});
			}
	$scope.showing = function(d){
		console.log(d);
		nameq = angular.copy(d);
		console.log(nameq);
		alert(nameq);
		//$scope.b = this.nameq;
	}

	$scope.get = function(data){
		alert(data)
		$http.post('getques.php', {'qname': data}).success(function(res){
			console.log(res);
			//$scope.qq.push.apply($scope.qq,res);
			$scope.qq = res;
			console.log($scope.qq);
			alert($scope.qq);
		}).error(function(error){
			alert(error);
		});
	}
});