'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.regimeService
 * @description
 * # regimeService
 * Factory in the infosPsIhmApp.
 */

angular.module('infosPsIhmApp')
.factory('regimeService', [ '$resource', function($resource) {
	  return {
		  listeDesRegimes: function(){
				return $resource('/regimes/liste', {}, {
					query : {
						method : 'GET',
						isArray : true
					}	
				});
			}
		};
}]);