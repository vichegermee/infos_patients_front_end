'use strict';

/**
 * @ngdoc function
 * @name infosPsIhmApp.controller:SearchdetailpatientCtrl
 * @description
 * # SearchdetailpatientCtrl
 * Controller of the infosPsIhmApp
 */

angular
	.module('infosPsIhmApp')
		.controller('searchDetailsPatientCtrl',
		['$scope','$routeParams', 'serviceDetailsPatient',
        function($scope, $routeParams, serviceDetailsPatient) {
	$scope.identifiant = $routeParams.identifiant;
	$scope.loadDetailsPatients = function() {
		serviceDetailsPatient.detailsPatient($scope.identifiant)
				.query()
				.$promise
				.then(function(success) {
			$scope.detailspatients = success;
		});
	};
	$scope.loadDetailsPatients();
}]);
