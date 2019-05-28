import { randomInt } from './random';

test('randomInt', () => {
  Math.random = jest.fn().mockReturnValue(1);
  expect(randomInt()).toBe(Number.MAX_SAFE_INTEGER);
  delete Math.random;
});
