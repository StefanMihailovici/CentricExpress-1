angular.module('signin.controller', [])
  .controller('SigninCtrl', function ( $rootScope, $window, $scope, $http, $ionicModal, $timeout, $ionicNavBarDelegate, $log, loginFactory) {
    $scope.loginWrong = false;
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };
    $scope.doSignin = function () {
      var userInfo = {
        "userName": $scope.signinName,
        "plainPassword": $scope.signinPassword,
        "firstName": "string",
        "lastName": "string",
        "birthDate": "2017-04-04T11:04:45.796Z",
        "email": $scope.signinEmail,
        "gender": $scope.signinGender
      };
       $http.post("https://sonarqubt-sqb02/centricexpress/api/users", 
        userInfo,   
      {
         headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (data) {
          $rootScope.$broadcast('COMPLETE_LOGIN',{name:$scope.signinName,pass:$scope.signinPassword});
          $scope.closeSignin();
          $scope.signinName = '';
           $scope.signinPassword = '';
           $scope.signinEmail = '';
           $scope.signinGender = '';
          
          return data;    
        }).catch(function(err){
            return err;
        });
    };
  })

