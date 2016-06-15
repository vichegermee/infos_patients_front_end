'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.detailsPatient
 * @description
 * # detailsPatient
 * Factory in the infosPsIhmApp.
 */
angular.module('infosPsIhmApp')
  .factory('serviceDetailsPatient', [ '$resource', function($resource) {
	return {
	detailsPatient: function(idPatient){
			return $resource('/patients/detailsPatient/:idPatient', {}, {
				query : {
					method : 'GET',
					params : {
						idPatient : idPatient
					},
				}	
			});
		}
	};
  } 
]);