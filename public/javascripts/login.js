angular.module('clubApp')
.controller('loginCtrl', function($scope, $http, $state, $rootScope){
  $scope.test = "hi";

  $scope.login = function(u, p){
    var loginInfo = {username: u, password: p};
    $http.post("/login", loginInfo)
    .then(function(data){
      $scope.hideLogin = true;
      console.log(data);
      $rootScope.currentUser = data;
      $state.go("where-to");
    })
    .catch(function(err){
      console.error(err);
    });
  };
});
