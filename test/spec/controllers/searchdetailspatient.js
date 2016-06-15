'use strict';

describe('Controller: searchDetailsPatientCtrl', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var SearchDetailsPatientCtrl,
    scope, serviceDetailsPatient;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$rootScope_,_serviceDetailsPatient_) {
    scope = _$rootScope_.$new();
    serviceDetailsPatient = _serviceDetailsPatient_;
  }));

  fit('should set $scope.detailspatients when calling $scope.loadDetailsPatients',inject(function ($q,$controller) {
	  serviceDetailsPatient.detailsPatient = function(idPatient){
			return {
  				query : function(){
					var deferred = $q.defer();
					deferred.resolve({});
					return {
						$promise : deferred.promise
					};
  				}
			};
		  };
		  SearchDetailsPatientCtrl = $controller('searchDetailsPatientCtrl', {
		      $scope: scope,
		      serviceDetailsPatient: serviceDetailsPatient
		    });
	scope.$digest();
	expect(scope.detailspatients).toEqual({});
  }));
});