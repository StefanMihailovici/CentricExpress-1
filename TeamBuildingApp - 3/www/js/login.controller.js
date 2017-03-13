angular.module('login.controller', [])
  .controller('LoginCtrl', function ($window, $scope, $http, $ionicModal, $timeout, $ionicNavBarDelegate, $log, loginFactory) {
    $scope.loginWrong = false;
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };
    $scope.doLogin = function () {
      loginFactory.getToken($scope.loginUsername,$scope.loginPassword).then(function(data){
        if(data.data.access_token){ //if we receive a token we save it 
         $window.localStorage.setItem('token',data.data.access_token);
         $scope.closeLogin();
        $scope.loginWrong = false;
        }else{
           //$log.log(data);
           $scope.loginWrong = true;
           $scope.errorMessage = data.data.error_description;
        }
      });
    };
  })

