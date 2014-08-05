'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var yogurtApp = angular.module('Froyonic', ['ionic'])
.config( function($stateProvider, $urlRouterProvider, $httpProvider){
  var defaults = $httpProvider.defaults.headers;

  defaults.patch = defaults.patch || {};
  defaults.patch['Content-Type'] = 'application/json';
  defaults.common['Accept'] = 'application/json';

  $stateProvider
    .state('index', {
      url: "/yogurts",
      templateUrl: "templates/index.html",
      controller: 'YogurtsCtrl'
    })
    .state('new', {
      url: "/yogurts/new",
      templateUrl: "templates/new.html",
      controller: 'NewYogurtCtrl'
    })
    .state('edit', {
      url: "/yogurts/:id/edit",
      templateUrl: "templates/edit.html",
      controller: 'EditYogurtCtrl'
    })
    .state('show', {
      url: "/yogurts/:id",
      templateUrl: "templates/show.html",
      controller: 'ShowYogurtCtrl'
    })

    $urlRouterProvider.otherwise("/yogurts");
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


yogurtApp.controller('YogurtsCtrl', ['$scope', function($scope) {
}]);
