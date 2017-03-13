angular.module('starter.controllers', [])
// .config(function ($stateProvider) {

//     $stateProvider.state('day1', {
//     url: '/day1',
//     templateUrl: 'templates/day1.html'
//   });
// })

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicNavBarDelegate) {
  // 

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $ionicNavBarDelegate.showBackButton(false);


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/forgetpass.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.forgetpass = modal;
  });

  $ionicModal.fromTemplateUrl('templates/day1.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.day1 = modal;
  });
  $ionicModal.fromTemplateUrl('templates/day2.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.day2 = modal;
  });
  $ionicModal.fromTemplateUrl('templates/day3.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.day3 = modal;
  });
  $ionicModal.fromTemplateUrl('templates/signin.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signin = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.showDay = function(num) {
     var days={
       1:function(){
        //  $state.go("app.day1");
       },
       2:function(){
        //  $scope.day2.show();
       },
       3:function(){
          // $scope.day3.show();
       }
     }
     days[num]();
  };

   $scope.closeDay = function(num) {
      var days={
       1:function(){
          $scope.day1.hide();
       },
       2:function(){
          $scope.day2.hide();
       },
       3:function(){
          $scope.day3.hide();
       }
     }
     days[num]();
  };
 $scope.showSignin = function() {
    $scope.signin.show();
  };
  $scope.closeSignin = function() {
    $scope.signin.hide();
  };

 $scope.showForgetPassword = function() {
    $scope.forgetpass.show();
  };
  $scope.closeForgetPassword = function() {
    $scope.forgetpass.hide();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


