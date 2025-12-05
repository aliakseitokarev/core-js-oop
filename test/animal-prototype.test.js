const { describe, it } = require('mocha');
const assert = require('node:assert');
const { mock } = require('node:test');

const { Animal, Cat, Cow, Dog } = require('../src/animal-prototype.js');
const { assertNoComments } = require('../utils/assert-no-comments.js');
const { optional } = require('../utils/optional.js');

it.optional = optional;

function isClass(fn) {
  try {
    fn();
    return false;
  } catch (error) {
    return (
      error.message ===
      `Class constructor ${fn.name} cannot be invoked without 'new'`
    );
  }
}

describe('Animal prototype', () => {
  it.optional(
    '"Animal" must be implemented as a constructor function, not a class',
    () => {
      const instance = new Animal();
      assert.strictEqual(isClass(Animal), false);
    }
  );

  it.optional(
    '"Dog" must be implemented as a constructor function, not a class',
    () => {
      const instance = new Dog();
      assert.strictEqual(isClass(Dog), false);
    }
  );

  it.optional(
    '"Cat" must be implemented as a constructor function, not a class',
    () => {
      const instance = new Cat();
      assert.strictEqual(isClass(Cat), false);
    }
  );

  it.optional(
    '"Cow" must be implemented as a constructor function, not a class',
    () => {
      const instance = new Cow();
      assert.strictEqual(isClass(Cow), false);
    }
  );

  it.optional(
    '"Dog" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const dog1 = new Dog('Rex');
      const dog2 = new Dog('Buddy');

      assert.strictEqual(Object.hasOwn(dog1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(dog2, 'makeSound'), false);
      assert.strictEqual(Object.is(dog1.makeSound, dog2.makeSound), true);
    }
  );

  it.optional(
    '"Cat" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const cat1 = new Cat('Whiskers');
      const cat2 = new Cat('Tom');

      assert.strictEqual(Object.hasOwn(cat1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(cat2, 'makeSound'), false);
      assert.strictEqual(Object.is(cat1.makeSound, cat2.makeSound), true);
    }
  );

  it.optional(
    '"Cow" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const cow1 = new Cow('Bessie');
      const cow2 = new Cow('Daisy');

      assert.strictEqual(Object.hasOwn(cow1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(cow2, 'makeSound'), false);
      assert.strictEqual(Object.is(cow1.makeSound, cow2.makeSound), true);
    }
  );

  it.optional(
    '"Animal" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const animal1 = new Animal('Generic');
      const animal2 = new Animal('Animal');

      assert.strictEqual(Object.hasOwn(animal1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(animal2, 'makeSound'), false);
      assert.strictEqual(Object.is(animal1.makeSound, animal2.makeSound), true);
    }
  );

  it.optional('Instances must return correct names and sounds', () => {
    const dog = new Dog('Rex');
    const cat = new Cat('Whiskers');
    const cow = new Cow('Bessie');
    const animal = new Animal('Generic');

    assert.strictEqual(dog.name, 'Rex');
    assert.strictEqual(dog.makeSound(), 'Woof');

    assert.strictEqual(cat.name, 'Whiskers');
    assert.strictEqual(cat.makeSound(), 'Meow');

    assert.strictEqual(cow.name, 'Bessie');
    assert.strictEqual(cow.makeSound(), 'Moo');

    assert.strictEqual(animal.name, 'Generic');
    assert.strictEqual(animal.makeSound(), 'Unknown sound');
  });

  it.optional('Instances must have correct constructor', () => {
    const dog = new Dog('Rex');
    const cat = new Cat('Whiskers');
    const cow = new Cow('Bessie');
    const animal = new Animal('Generic');

    assert.strictEqual(dog.constructor, Dog);
    assert.strictEqual(cat.constructor, Cat);
    assert.strictEqual(cow.constructor, Cow);
    assert.strictEqual(animal.constructor, Animal);
  });

  it.optional('"Dog" must correctly inherit from Animal', () => {
    const originalCall = Animal.call;
    const originalApply = Animal.apply;

    const spyCall = mock.fn(function (self, ...args) {
      return originalCall.call(Animal, self, ...args);
    });
    const spyApply = mock.fn(function (self, args) {
      return originalApply.call(Animal, self, args);
    });

    Animal.call = spyCall;
    Animal.apply = spyApply;

    const dog = new Dog('Rex');

    const totalCalls = spyCall.mock.callCount() + spyApply.mock.callCount();
    assert.strictEqual(totalCalls, 1, 'should call parent constructor');

    Animal.call = originalCall;
    Animal.apply = originalApply;

    assert.ok(dog instanceof Animal);
    assert.ok(dog instanceof Dog);
    assert.ok(Animal.prototype.isPrototypeOf(dog));
    assert.ok(
      dog.constructor.name === 'Dog',
      'The constructor name must remain valid after inheritance'
    );
    assert.strictEqual(dog.isAnimal, true);
  });

  it.optional('"Cat" must correctly inherit from Animal', () => {
    const originalCall = Animal.call;
    const originalApply = Animal.apply;

    const spyCall = mock.fn(function (self, ...args) {
      return originalCall.call(Animal, self, ...args);
    });
    const spyApply = mock.fn(function (self, args) {
      return originalApply.call(Animal, self, args);
    });

    Animal.call = spyCall;
    Animal.apply = spyApply;

    const cat = new Cat('Whiskers');

    const totalCalls = spyCall.mock.callCount() + spyApply.mock.callCount();
    assert.strictEqual(totalCalls, 1, 'should call parent constructor');

    Animal.call = originalCall;
    Animal.apply = originalApply;

    assert.ok(cat instanceof Animal);
    assert.ok(cat instanceof Cat);
    assert.ok(Animal.prototype.isPrototypeOf(cat));
    assert.ok(
      cat.constructor.name === 'Cat',
      'The constructor name must remain valid after inheritance'
    );
    assert.strictEqual(cat.isAnimal, true);
  });

  it.optional('"Cow" must correctly inherit from Animal', () => {
    const originalCall = Animal.call;
    const originalApply = Animal.apply;

    const spyCall = mock.fn(function (self, ...args) {
      return originalCall.call(Animal, self, ...args);
    });
    const spyApply = mock.fn(function (self, args) {
      return originalApply.call(Animal, self, args);
    });

    Animal.call = spyCall;
    Animal.apply = spyApply;

    const cow = new Cow('Bessie');

    const totalCalls = spyCall.mock.callCount() + spyApply.mock.callCount();
    assert.strictEqual(totalCalls, 1, 'should call parent constructor');

    Animal.call = originalCall;
    Animal.apply = originalApply;

    assert.ok(cow instanceof Animal);
    assert.ok(cow instanceof Cow);
    assert.ok(Animal.prototype.isPrototypeOf(cow));
    assert.ok(
      cow.constructor.name === 'Cow',
      'The constructor name must remain valid after inheritance'
    );
    assert.strictEqual(cow.isAnimal, true);
  });

  it.optional('Prototypes are distinct objects', () => {
    const animal = new Animal('animal');
    const cat = new Cat('cat');
    assert.notStrictEqual(Animal.prototype, Cat.prototype);
    const dog = new Dog('dog');
    assert.notStrictEqual(Animal.prototype, Dog.prototype);
    const cow = new Cow('cow');
    assert.notStrictEqual(Animal.prototype, Cow.prototype);

    assert.notStrictEqual(Cat.prototype, Dog.prototype);
    assert.notStrictEqual(Cat.prototype, Cow.prototype);

    assert.notStrictEqual(Dog.prototype, Cat.prototype);
    assert.notStrictEqual(Dog.prototype, Cow.prototype);

    assert.notStrictEqual(Cow.prototype, Cat.prototype);
    assert.notStrictEqual(Cow.prototype, Dog.prototype);
  });

  it.optional('should not contain commentaries', () => {
    const animal = new Animal('');
    const dog = new Dog('');
    const cat = new Cat('');
    const cow = new Cow('');

    [
      Animal,
      Dog,
      Cat,
      Cow,
      animal.makeSound,
      dog.makeSound,
      cat.makeSound,
      cow.makeSound,
    ].forEach((fn) => assertNoComments(fn));
  });
});
