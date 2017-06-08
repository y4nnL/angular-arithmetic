// -------------------------------------------------------------------------------------------------
// Service

/**
 * Four methods for basic arithmetic operations exposed as AngularJS service
 * @constructor
 */
class ArithmeticService {
  /**
   * Add n1 with n2
   * @param {number} n1
   * @param {number} n2
   * @returns {number}
   */
  static add(n1, n2) {
    return n1 + n2;
  }
}

// -------------------------------------------------------------------------------------------------
// Export

angular.module('arithmetic', [])
  .service('arithmetic', () => ArithmeticService);
