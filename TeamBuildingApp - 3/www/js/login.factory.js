angular.module('login.factory', [])
  .factory('loginFactory', function ($http, $q) {
   function getToken(loginUsername,loginPassword) {
      var data = 'grant_type=password&username='+ loginUsername +'&password=' + loginPassword ;
      var promise = $http.post("https://sonarqubt-sqb02/centricexpress/token", 
        data,   
      {
         headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(function (data) {
          return data;
        }).catch(function(err){
            return err;
        });
        return promise;
   }
    return {
      getToken: getToken
    }
  })

