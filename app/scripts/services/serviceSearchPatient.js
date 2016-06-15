'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.serviceSearchPatient
 * @description # serviceSearchPatient Factory in the infosPsIhmApp.
 */

angular.module('infosPsIhmApp').factory('PatientsService',
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
				}
			};
		} ]);