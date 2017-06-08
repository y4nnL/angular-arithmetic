describe('ArithmeticService', () => {
  /**
   * @type {ArithmeticService}
   */
  let arithmetic;

  beforeEach(module('arithmetic'));

  beforeEach(inject(($injector) => {
    arithmetic = $injector.get('arithmetic');
  }));

  it('should be injected correctly with Babel', () => {
    expect(arithmetic).toBeTruthy();
    expect(arithmetic.name).toBe('arithmetic');
  });
});
