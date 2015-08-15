'use strict';

/**
 * @ngdoc overview
 * @name hotelApp
 * @description
 * # hotelApp
 *
 * Main module of the application.
 */
angular
  .module('hotelApp', [
    'ngAnimate',
    'ngResource',
    'ui.router'
  ])
  .config( function( $stateProvider ) {
    $stateProvider
      .state( 'property', {
        url: '/',
        views: {
          "mainView": { 
            templateUrl: 'views/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      } )
      .state( 'property.room', {
        url: 'room/:type',
        views: {
          "roomView": { 
            templateUrl: 'views/room.html',
            controller: 'RoomController',
            controllerAs: 'room'
          }
        }
      } );
  });
