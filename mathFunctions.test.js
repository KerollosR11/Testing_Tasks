// mathFunctions.test.js

const { sum, substraction } = require('./mathFunctions');

// Test for sum function
test('correctly sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, -1)).toBe(-2);
  expect(sum(14, 2)).toBe(16);
});

// Test for abstraction function with sum as operation
test('substraction two numbers', () => {
    expect(substraction(2, 1)).toBe(1);
    expect(substraction(5, 3)).toBe(2);
    expect(substraction(19, 7)).toBe(12);
    expect(substraction(10, 6)).toBe(4);
});
