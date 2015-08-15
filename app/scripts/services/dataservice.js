'use strict';

angular.module( 'hotelApp' )
  .service( 'DataService', function ( $http ) {
    
    this.getData = function() {
    	return $http.get('data/friends.json');
	};

  });