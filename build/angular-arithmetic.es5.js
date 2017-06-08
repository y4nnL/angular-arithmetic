'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -------------------------------------------------------------------------------------------------
// Service

/**
 * Four methods for basic arithmetic operations exposed as AngularJS service
 * @constructor
 */
var ArithmeticService = function ArithmeticService() {
  _classCallCheck(this, ArithmeticService);
};

// -------------------------------------------------------------------------------------------------
// Export

angular.module('arithmetic', []).service('arithmetic', function () {
  return new ArithmeticService();
});
//# sourceMappingURL=angular-arithmetic.es5.js.map
