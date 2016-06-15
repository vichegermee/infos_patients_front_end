'use strict';

/**
 * @ngdoc function
 * @name infosPsIhmApp.controller:ListeselectCtrl
 * @description
 * # ListeselectCtrl
 * Controller of the infosPsIhmApp
 */

angular.module('infosPsIhmApp')
  .controller('ListeselectCtrl', ['$scope', 'caisseService', 'regimeService','mtService',  
	    function ($scope, caisseService, regimeService, mtService) {
		  
			  var loadCaisses = function(){
				  caisseService.listeDesCaisses().query().$promise.then(function(success){
					  
					  	$scope.caisses = success;
				  });
				  $scope.orderPropCaisses = 'lib_caisse';
			  };
		  
			  loadCaisses();
			  
			  var loadRegimes = function(){
				  regimeService.listeDesRegimes().query().$promise.then(function(success){
					  	$scope.regimes = success;
				  });
				  $scope.orderPropRegimes = 'libreg';
			  };
		
			 loadRegimes();
			 
			 var loadMt = function(){
				 mtService.listeDesMt().query().$promise.then(function(success){
					 $scope.medecins = success;
				 });
				 $scope.orderPropMt = 'nom_mt';
			 };
			 
			 loadMt();
	  	}
  ]);
