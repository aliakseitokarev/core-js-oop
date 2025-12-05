const { describe, it } = require('mocha');
const assert = require('node:assert');

const { Animal, Cat, Cow, Dog } = require('../src/animal.js');
const { assertNoComments } = require('../utils/assert-no-comments.js');
const { optional } = require('../utils/optional.js');

it.optional = optional;

describe('Animal', () => {
  it.optional('Dog should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Dog() instanceof Animal);
  });

  it.optional('Cat should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Cat() instanceof Animal);
  });

  it.optional('Cow should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Cow() instanceof Animal);
  });

  it.optional('Dog should bark', () => {
    const dog = new Dog();

    assert.strictEqual(dog.makeSound(), 'Woof');
  });

  it.optional('Cat should meow', () => {
    const cat = new Cat();

    assert.strictEqual(cat.makeSound(), 'Meow');
  });

  it.optional('Cow should moo', () => {
    const cow = new Cow();

    assert.strictEqual(cow.makeSound(), 'Moo');
  });

  it.optional('should not contain commentaries', () => {
    [new Cat().makeSound, new Dog().makeSound, new Cow().makeSound].forEach(
      (fn) => assertNoComments(fn)
    );
  });
});
