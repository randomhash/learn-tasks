import {calcFib} from './t1-fib';

describe('calcFib tests', () => {
  it('should be function', () => {
    expect(calcFib).toBeInstanceOf(Function);
  });

  it('should calc correct for 0', () => {
    const result = calcFib(0);

    expect(result).toEqual([0, 1]);
  });

  it('should calc correct for 1', () => {
    const result = calcFib(1);

    expect(result).toEqual([0, 1]);
  });

  it('should calc correct for 2', () => {
    const result = calcFib(2);

    expect(result).toEqual([0, 1, 1]);
  });

  it('should calc correct for 38', () => {
    const result = calcFib(38);

    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it('should calc correct for 89', () => {
    const result = calcFib(89);

    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it('should pass sanity check, and return basic response for all data types except the number', () => {
    expect(calcFib('lel' as any)).toEqual([0, 1]);
    expect(calcFib(undefined as any)).toEqual([0, 1]);
    expect(calcFib(null as any)).toEqual([0, 1]);
    expect(calcFib({abra: 'kadabra'} as any)).toEqual([0, 1]);
  });
});
