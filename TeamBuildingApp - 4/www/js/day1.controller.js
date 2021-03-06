angular.module('day1.controller', [])
  .controller('Day1Ctrl', function ($window, $scope, $http, $ionicModal, $timeout, $ionicNavBarDelegate, $log, dayFactory) {
    this.$onInit = function () {
      // $http.get("http://sonarqubt-sqb02:8080/api/v1/eventDays")
      //       .then(function (data) {
      //         $scope.day1 = data.data[0];
      //         $http.get("http://sonarqubt-sqb02:8080/api/v1/eventDay/"+ $scope.day1.eventDayId).then(function(data){
      //           $scope.day1.eventsList = data.data;
      //         });
      //       }).catch(function(err){
      //           return err;
      //       });
      dayFactory.getDays().then(function (data) {
        $scope.day1 = data[0];
        getEvents($scope.day1.eventDayId);
      });
    }

    function getEvents(eventID) {
      dayFactory.getEvents(eventID).then(function (data) {
        $scope.day1.eventsList = data;
      });
    }
  })

