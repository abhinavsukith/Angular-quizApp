angular.module('qApp').controller('questionsController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
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


        }])