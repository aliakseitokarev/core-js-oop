const {
  throwNotImplementedError,
} = require('../utils/throw-not-implemented-error.js');

class Person {
  /**
   * @public
   * @static
   * @type {number}
   */
  static count = 0;

  /**
   * @public
   * @static
   * @type {number}
   */
  static totalWeight = 0;

  /**
   * @public
   * @static
   * @type {number}
   */
  static totalHeight = 0;

  /**
   * Returns the average weight of all created persons.
   *
   * @public
   * @static
   * @returns {number}
   *
   * @example
   * Person.count = 2;
   * Person.totalWeight = 150;
   * Person.averageWeight(); => 75
   */
  static averageWeight() {
    throwNotImplementedError();
  }

  /**
   * Returns the average height of all created persons.
   *
   * @public
   * @static
   * @returns {number}
   *
   * @example
   * Person.count = 2;
   * Person.totalHeight = 380;
   * Person.averageHeight(); => 190
   */
  static averageHeight() {
    throwNotImplementedError();
  }

  /**
   * @param {number} weight
   * @param {number} height
   */
  constructor(/* weight, height */) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   *
   * @example
   * const p = new Person(70, 180);
   * p.weight; => 70
   */
  get weight() {
    return null;
  }

  /**
   * @public
   * @param {number} weight
   * @returns {number}
   *
   * @example
   * const p = new Person(70, 180);
   * p.weight = 90;
   * p.weight; => 90
   */
  set weight(weight) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   *
   * @example
   * const p = new Person(70, 180);
   * p.height; => 180
   */
  get height() {
    return null;
  }

  /**
   * @public
   * @param {number} height
   * @returns {number}
   *
   * @example
   * const p = new Person(70, 180);
   * p.height = 200;
   * p.height; => 200
   */
  set height(height) {
    throwNotImplementedError();
  }
}

module.exports = { Person };
