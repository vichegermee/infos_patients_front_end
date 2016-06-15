'use strict';

/**
 * @ngdoc function
 * @name infosPsIhmApp.controller:SearchlistpatientCtrl
 * @description # SearchlistpatientCtrl Controller of the infosPsIhmApp
 */
angular.module('infosPsIhmApp')

.controller('searchListPatientCtrl',['$scope','$routeParams','PatientsService',
				function($scope,$routeParams, PatientsService) {
	$scope.nirOdPatient = $routeParams.nirOdPatient;
	
		$scope.loadPatients = function() {
			PatientsService.listePatients($scope.nirOdPatient)
					.query()
					.$promise
					.then(function(success) {
//				console.log("Appel terminé ");
//				console.log(success);

				$scope.patients = success;
			});
			$scope.orderProp = 'dateNaiss';
		};
		
		$scope.loadPatients();
	
	//$scope.form = null;
} ]);

//angular.module('infosPsIhmApp').controller('searchDetailsPatientCtrl', 
//		['$scope','$routeParams', 'serviceDetailsPatient',
//        function($scope, $routeParams, serviceDetailsPatient) {
//	  
//	$scope.identifiant = $routeParams.identifiant;
//
//	$scope.loadDetailsPatients = function() {
//		serviceDetailsPatient.detailsPatient($scope.identifiant)
//				.query()
//				.$promise
//				.then(function(success) {
//			//console.log("Appel terminé dans le controller des détails ");
//			$scope.detailspatients = success;
//			
//		});
//	}
//	$scope.loadDetailsPatients();
//
//}]);