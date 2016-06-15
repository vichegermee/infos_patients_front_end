'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.serviceSearchPatient
 * @description # serviceSearchPatient Factory in the infosPsIhmApp.
 */

angular.module('infosPsIhmApp').factory('rechercherPatient',
		[ '$resource', function($resource) {
			return {
				listePatients : function(nirOd) {
					return $resource('/patients/nir/:nirOd', {}, {
						query : {
							method : 'GET',
							params : {
								nirOd : nirOd
							},
							isArray : true
						}
					});
					//console.log("après resource");
				}
			};
		} ]);
