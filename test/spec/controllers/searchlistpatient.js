'use strict';

describe('Controller: searchlistpatientCtrl', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var SearchlistpatientCtrl,
    scope, PatientsService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_PatientsService_) {
    scope = $rootScope.$new();
    PatientsService = _PatientsService_;

    SearchlistpatientCtrl = $controller('searchListPatientCtrl', {
      $scope: scope,
      PatientsService: PatientsService
    });
  }));

  it('should set $scope.patients when calling $scope.loadPatients',inject(function ($q) {
	  PatientsService.listePatients = function(nirOd){
			return {
				query : function(){
					var deferred = $q.defer();
					deferred.resolve([{id:"995775756756"}]);
					return { $promise : deferred.promise};
				}
			};
		  };
		  
	scope.save();
	
	scope.$digest();
	
	expect(scope.patients).toEqual([{id:"995775756756"}]);
  }));
});