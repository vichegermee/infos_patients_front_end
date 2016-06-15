'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.caisseService
 * @description
 * # caisseService
 * Factory in the infosPsIhmApp.
 */
angular.module('infosPsIhmApp')
	  .factory('caisseService', [ '$resource', function($resource) {
		  return {
				listeDesCaisses: function(){
					return $resource('/caisses/liste', {}, {
						query : {
							method : 'GET',
							isArray : true
						}	
					});
				}
			};
	  }]);