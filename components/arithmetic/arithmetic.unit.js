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
  });

  it('should do some additions', () => {
    expect(arithmetic.add(1, 1)).toBe(2);
    expect(arithmetic.add(1.1, 1.1)).toBe(2.2);
    expect(arithmetic.add(-1, 1)).toBe(0);
    expect(arithmetic.add(-1.1, 1.1)).toBe(0);
  });
});
