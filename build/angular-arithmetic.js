// -------------------------------------------------------------------------------------------------
// Service

/**
 * Four methods for basic arithmetic operations exposed as AngularJS service
 * @constructor
 */
class ArithmeticService {
  constructor() {
    this.name = 'arithmetic';
  }
}

// -------------------------------------------------------------------------------------------------
// Export

angular.module('arithmetic', [])
  .service('arithmetic', () => new ArithmeticService());
