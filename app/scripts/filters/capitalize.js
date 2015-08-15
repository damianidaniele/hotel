'use strict';

angular
	.module( 'hotelApp' )
	.filter( 'capitalize', function() {
    return function( input ) {
    	if ( !input ) { return ''; }
    	var temp = input.replace( /-/g, ' ' ); 
		return temp.replace( /([^\W_]+[^\s-]*) */g, function( txt ){
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			} );
    };
  });