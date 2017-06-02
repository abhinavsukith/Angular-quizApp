angular.module('qApp').
		config(function($routeProvider, $locationProvider){
			      $routeProvider.when('/', {
            templateUrl: 'front_view.php',
            controller: 'qcon'
        }).when('/signin', {
            templateUrl: 'main.php',
            controller: 'qcon'
        })
		.when('/dashboard', {
        	templateUrl: 'dashboard.php'
        }).when('/admindashboard', {
        	templateUrl: 'admindashboard.php'
        }).when('/wrong', {
        	templateUrl: 'wrong.php'
        }).when('/admin_login', {
        	templateUrl: 'admin_login.php',
        	controller: 'adminlogcon'
        }).when('/signUp', {
        	templateUrl: 'sign_up.php',
        	controller: 'signupcon'
        }).when('/postquiz', {
        	templateUrl: 'admin/create_quiz.php',
        	
        }).when('/postquestions', {
        	templateUrl: 'admin/post_q.php',
        	
        }).when('/questions/:qname', {
            templateUrl: 'questions_iso_temp.php',
            controller: 'questionsController'
            
        }).when('/attemptedtests', {
            templateUrl: 'attempted_tests.php',
            
            
        }).when('/get_ques/:quname', {
            templateUrl: 'attempted_que_temp.php',
            controller: 'attemptedQuestionsController'
            
        }).when('/logout', {
            templateUrl: 'logout.php',           
        }).when('/checkusers', {
            templateUrl: 'checkusers.php',            
        }).when('/checkperformance/:usname', {
            templateUrl: 'checkusers.php',            
        }).when('/delete_ques/:qid', {
            templateUrl: 'admin/post_q.php',
            controller: 'DeleteQuesCon'
        }).when('/postmaterials', {
            templateUrl: 'admin/post_materials.php',
            controller: 'DeleteQuesCon'
        });
		}).controller('questionsController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
            //alert("hello");
            //alert($routeParams.qname);
            
            var ab = $routeParams.qname;
            //alert(ab);
            
            $http.post('getques.php', {'qname': ab}).success(function(res){
            console.log(res);
            //$scope.qq.push.apply($scope.qq,res);
            $scope.qq = res;
            console.log($scope.qq);
            //alert($scope.qq);
            }).error(function(error){
            //alert(error);
            });


        }]).controller('attemptedQuestionsController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
            
            
            var abc = $routeParams.quname;
            //alert(abc);
            
            $http.post('getting_att_que.php', {'quname': abc}).success(function(res){
            console.log(res);
            //$scope.qq.push.apply($scope.qq,res);
            $scope.qques_arr = res;
            console.log($scope.qques_arr);
            //alert($scope.qques_arr);
            }).error(function(error){
            //alert(error);
            });


        }]).controller('DeleteQuesCon',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
            
            
            var abi = $routeParams.qid;
            //alert(abc);
            
            $http.post('delete_ques.php', {'qid': abi}).success(function(res){
            console.log(res);
            //$scope.qq.push.apply($scope.qq,res);
            $scope.qques_arr = res;
            console.log($scope.qques_arr);
            //alert($scope.qques_arr);
            }).error(function(error){
            //alert(error);
            });


        }]);