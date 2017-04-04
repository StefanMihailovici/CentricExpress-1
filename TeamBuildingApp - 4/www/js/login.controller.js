angular.module('login.controller', [])
  .controller('LoginCtrl', function ( $rootScope,$window, $scope, $http, $ionicModal, $timeout, $ionicNavBarDelegate, $log, loginFactory) {
     $rootScope.$on('COMPLETE_LOGIN',function(evt, arg){
      $scope.loginUsername = arg.name;
      $scope.loginPassword = arg.pass;
    })
    $scope.loginWrong = false;
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };
    $scope.doLogin = function () {
      loginFactory.getToken($scope.loginUsername,$scope.loginPassword).then(function(response){
        if(response.data && response.data.access_token){ //if we receive a token we save it 
         $window.localStorage.setItem('token',response.data.access_token);
         $scope.closeLogin();
        $scope.loginWrong = false;
        }else{
           //$log.log(data);
           $scope.loginWrong = true;
           $scope.errorMessage = response.data.error_description;
        }
      });
    };
  })

