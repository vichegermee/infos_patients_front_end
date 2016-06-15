'use strict';

/**
 * @ngdoc overview
 * @name infosPsIhmApp
 * @description
 * # infosPsIhmApp
 *
 * Main module of the application.
 */
angular
  .module('infosPsIhmApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
    	  templateUrl: 'views/rechercherPatient.html',
          controller: 'rechercherpatientCtrl',
          controllerAs: 'Rechercherpatient'
      })
      .when('/ajouterPatient', {
        templateUrl: 'views/ajouterPatient.html',
        controller: 'ListeselectCtrl',
        controllerAs: 'ajouterpatient'
      })
      .when('/rechercherPatient', {
        templateUrl: 'views/rechercherPatient.html',
        controller: 'rechercherpatientCtrl',
        controllerAs: 'Rechercherpatient'
      })
      .when('/searchListPatient/:nirOdPatient', {
        templateUrl: 'views/searchListPatient.html',
        controller: 'searchListPatientCtrl',
        controllerAs: 'searchListPatient'
      })
      .when('/searchDetailsPatient/:identifiant', {
        templateUrl: 'views/searchDetailsPatient.html',
        controller: 'searchDetailsPatientCtrl',
        controllerAs: 'searchdetailspatient'
      })
      .when('/modifierPatient', {
        templateUrl: 'views/modifierPatient.html',
        controller: 'ModifierpatientCtrl',
        controllerAs: 'modifierpatient'
      })
      .when('/supprimerPatient', {
        templateUrl: 'views/supprimerPatient.html',
        controller: 'SupprimerpatientCtrl',
        controllerAs: 'supprimerpatientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



