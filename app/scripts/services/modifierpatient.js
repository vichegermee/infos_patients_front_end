'use strict';

/**
 * @ngdoc service
 * @name infosPsIhmApp.modifierPatient
 * @description
 * # modifierPatient
 * Factory in the infosPsIhmApp.
 */
angular.module('infosPsIhmApp')
  .factory('modifierPatient', function () {
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
