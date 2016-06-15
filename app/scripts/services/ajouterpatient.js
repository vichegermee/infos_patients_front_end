'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.ajouterPatient
 * @description
 * # ajouterPatient
 * Factory in the infosPsIhmApp.
 */
angular.module('infosPsIhmApp')
  .factory('ajouterPatient', ['$resource', function ($resource) {
	    
			  var listeDesCaisses = function(){
					return $resource('/caisses/liste', {}, {
						query : {
							method : 'GET',
							isArray : true
						}	
					});
				};
				listeDesCaisses();
		  
			  var listeDesRegimes = function(){
				return $resource('/regimes/liste', {}, {
					query : {
						method : 'GET',
						isArray : true
					}	
				});
			  };
			  
			  listeDesRegimes();
  	}
  
  ]);