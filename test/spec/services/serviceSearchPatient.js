'use strict';

describe('Service: serviceSearchPatient', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var PatientsService,
    scope;
  var detailsPatient;
  beforeEach(inject(function (_PatientsService_,$rootScope) {
	  scope = $rootScope.$new();
	  PatientsService = _PatientsService_;
  }));
  it('should set $scope.patients when calling $scope.loadPatients',inject(function ($q) {
	  PatientsService.listePatients = function(nirOd){
			return {
				query : function(){
					var deferred = $q.defer();
					deferred.resolve([
					                  {
					                	    "prenomPt": "Éric",
					                	    "rang": 1,
					                	    "caisse": {
					                	      "regime": {
					                	        "id_reg": 1,
					                	        "lib_reg": "REGIME GENERAL"
					                	      },
					                	      "id_caisse": 1,
					                	      "lib_caisse": "caisse_num_1"
					                	    },
					                	    "mt": {
					                	      "id_mt": 2,
					                	      "nom_mt": "Dubreuil",
					                	      "prenom_mt": "Frédéric",
					                	      "num_tel_mt": "+33555874586",
					                	      "adresse_mt": "2 boulevard mendes france"
					                	    },
					                	    "regime": {
					                	      "id_reg": 1,
					                	      "lib_reg": "REGIME GENERAL"
					                	    },
					                	    "identifiant": "123654198502011",
					                	    "nom": "Pauwawé",
					                	    "nir_OD": "123654",
					                	    "date_naiss": 476060400000
					                	  }
					                	]);
					return  deferred.promise;
				}
			};
		  };
		  
		  expect(PatientsService.listePatients).toBe([
		                                              {
		                                            	    "prenomPt": "Éric",
		                                            	    "rang": 1,
		                                            	    "caisse": {
		                                            	      "regime": {
		                                            	        "id_reg": 1,
		                                            	        "lib_reg": "REGIME GENERAL"
		                                            	      },
		                                            	      "id_caisse": 1,
		                                            	      "lib_caisse": "caisse_num_1"
		                                            	    },
		                                            	    "mt": {
		                                            	      "id_mt": 2,
		                                            	      "nom_mt": "Dubreuil",
		                                            	      "prenom_mt": "Frédéric",
		                                            	      "num_tel_mt": "+33555874586",
		                                            	      "adresse_mt": "2 boulevard mendes france"
		                                            	    },
		                                            	    "regime": {
		                                            	      "id_reg": 1,
		                                            	      "lib_reg": "REGIME GENERAL"
		                                            	    },
		                                            	    "identifiant": "123654198502011",
		                                            	    "nom": "Pauwawé",
		                                            	    "nir_OD": "123654",
		                                            	    "date_naiss": 476060400000
		                                            	  }
		                                            	]);
  }));
});