const { sum } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('shold sum 2 and 2 even if one of them are a string', () => {
  expect(sum('2', 2)).toBe(4);
});

it('should throw an error if what is provided to the function cannot be summed', () => {
  expect(() => sum('', 2)).toThrowError();

  expect(() => sum(2, '')).toThrowError();

  expect(() => sum([2, 2])).toThrowError();

  expect(() => sum({})).toThrowError();

  expect(() => sum()).toThrowError();
});
