angular.module('day.factory', [])
  .factory('dayFactory', function ($http, $q) {
   function getDays() {
      var promise = $http.get("http://sonarqubt-sqb02:8080/api/v1/eventDays")
        .then(function (response) {
         return response.data;
        }).catch(function(err){
            return err;
        });
        return promise;
   }
   function getEvents(eventDayId) {
      var promise = $http.get("http://sonarqubt-sqb02:8080/api/v1/eventDay/"+ eventDayId).then(function(response){
            return response.data;
          });
        return promise;
   }
    return {
      getDays: getDays,
      getEvents: getEvents
    }
  })

