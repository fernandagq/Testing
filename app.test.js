const testCalc = require ('./app');

test('add', () => {
  expect(testCalc.addition(1, 2)).toBe(3);
  expect(testCalc.addition(5, 5)).toBe(10);
  expect(testCalc.addition(24, 100)).toBe(124);

});

test('subtract', () => {
  expect(testCalc.subtraction(2, 2)).toBe(0);
  expect(testCalc.subtraction(10, 5)).toBe(5);
  expect(testCalc.subtraction(14, 7)).toBe(7);

});

test('multiplication', () => {
  expect(testCalc.multiplication(1, 2)).toBe(2);
  expect(testCalc.multiplication(5, 6)).toBe(30);
  expect(testCalc.multiplication(7, 7)).toBe(49);


});

test('division', () => {
  expect(testCalc.division(6, 2)).toBe(3);
  expect(testCalc.division(12, 3)).toBe(4);
  expect(testCalc.division(40, 4)).toBe(10);

});