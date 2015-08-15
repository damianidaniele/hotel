'use strict';

/**
 * @ngdoc function
 * @name hotelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hotelApp
 */
angular
	.module( 'hotelApp' )
	.controller('MainController', function ( DataService ) {
		DataService
			.getData()
			.success( function( data ) {
	 			this.rooms = data;
			}.bind( this ))
  });
