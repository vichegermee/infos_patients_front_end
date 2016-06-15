'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.supprimerPatient
 * @description
 * # supprimerPatient
 * Factory in the infosPsIhmApp.
 */
angular.module('infosPsIhmApp')
  .factory('supprimerPatient', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
