import { sum, div } from './calc';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 8 / 2 to equal 4', () => {
  expect(div(8, 2)).toBe(4);
});
