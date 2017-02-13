// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.calendar', {
      url: '/calendar',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendar.html'
        }
      }
    })
    .state('app.overview', {
      url: '/overview',
      views: {
        'menuContent': {
          templateUrl: 'templates/overview.html',
          controller: 'OverviewCtrl'
        }
      }
    })
 .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })
    .state('app.timeline', {
      url: '/timeline',
      views: {
        'menuContent': {
          templateUrl: 'templates/timeline.html'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
     .state('app.day1', {
      url: '/day1',
      views: {
        'menuContent': {
          templateUrl: 'templates/day1.html',
           controller: 'AppCtrl'
        }
      }
    })
         .state('app.day2', {
      url: '/day2',
      views: {
        'menuContent': {
          templateUrl: 'templates/day2.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.day3', {
      url: '/day3',
      views: {
        'menuContent': {
          templateUrl: 'templates/day3.html',
          controller: 'AppCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
