const {
  throwNotImplementedError,
} = require('../utils/throw-not-implemented-error.js');

/**
 * @param {string} name - The name of the animal.
 *
 * Requirements:
 * - Must be a constructor function, not a class.
 * - Must set the "name" property on the instance.
 * - Must set "isAnimal" property to "true".
 * - Must have a "makeSound" method on the prototype that returns "'Unknown sound'".
 */
function Animal(/* name */) {
  throwNotImplementedError();
}

/**
 * @param {string} name - The name of the dog.
 *
 * Requirements:
 * - Must be a constructor function, not a class.
 * - Must inherit from "Animal".
 * - Must define a "makeSound" method on the prototype returning 'Woof'.
 * - Instances must have correct "constructor".
 * - Instances must correctly inherit "isAnimal" from "Animal".
 * - Prototype must be distinct from other animals.
 */
function Dog(/* name */) {
  throwNotImplementedError();
}

/**
 * @param {string} name - The name of the cat.
 *
 * Requirements:
 * - Must be a constructor function, not a class.
 * - Must inherit from "Animal".
 * - Must define a "makeSound" method on the prototype returning 'Meow'.
 * - Instances must have correct "constructor".
 * - Instances must correctly inherit "isAnimal" from "Animal".
 * - Prototype must be distinct from other animals.
 */
function Cat(/* name */) {
  throwNotImplementedError();
}

/**
 * @param {string} name - The name of the cow.
 *
 * Requirements:
 * - Must be a constructor function, not a class.
 * - Must inherit from "Animal".
 * - Must define a "makeSound" method on the prototype returning 'Moo'.
 * - Instances must have correct "constructor".
 * - Instances must correctly inherit "isAnimal" from "Animal".
 * - Prototype must be distinct from other animals.
 */
function Cow(/* name */) {
  throwNotImplementedError();
}

module.exports = { Animal, Dog, Cat, Cow };
