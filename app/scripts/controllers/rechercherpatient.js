'use strict';

/**
 * @ngdoc function
 * @name infosPsIhmApp.controller:SearchlistpatientCtrl
 * @description # SearchlistpatientCtrl Controller of the infosPsIhmApp
 */
angular.module('infosPsIhmApp')

.controller('rechercherpatientCtrl',['$scope','rechercherPatient',
				function($scope, rechercherPatient) {
	
	$scope.save=function(){
		var loadPatients = function() {
			rechercherPatient.listePatients($scope.nirOdPatient)
					.query()
					.$promise
					.then(function(success) {
//				console.log("Appel terminé ");
//				console.log(success);

				$scope.patients = success;
			});
			$scope.orderProp = 'dateNaiss';
		};
		
		loadPatients();
	
	};
	//$scope.form = null;
} ]); 