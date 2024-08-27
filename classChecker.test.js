const Person = require('./classChecker');

test('object is an instance of Person', () => {
  const person = new Person('Ahmed', 30);
  expect(person).toBeInstanceOf(Person);
});

test('object is not an instance of Person', () => {
  const animal = { name: 'elephant', age: 25 };
  expect(animal).not.toBeInstanceOf(Person);
});