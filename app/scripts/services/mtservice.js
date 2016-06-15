'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.mtService
 * @description
 * # mtService
 * Factory in the infosPsIhmApp.
 */

angular.module('infosPsIhmApp')
.factory('mtService', [ '$resource', function($resource) {
	  return {
			listeDesMt: function(){
				return $resource('/mt/liste', {}, {
					query : {
						method : 'GET',
						isArray : true
					}	
				});
			}
		};
}]);
