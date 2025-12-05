const {
  throwNotImplementedError,
} = require('../utils/throw-not-implemented-error.js');

class Engine {
  /**
   * @param {number} power
   */
  constructor(/* power */) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   *
   * @example
   * const engine = new Engine(120);
   * engine.power; => 120
   */
  get power() {
    return null;
  }

  /**
   * @public
   * @param {number} power
   * @returns {number}
   *
   * @example
   * const engine = new Engine(100);
   * engine.power = 150;
   * engine.power; => 150
   */
  set power(power) {
    throwNotImplementedError();
  }
}

class Car {
  /**
   * @param {Engine} engine
   *
   * @example
   * const engine = new Engine(100);
   * const car = new Car(engine);
   * car.getEnginePower(); => 100
   */
  constructor(/* engine */) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   *
   * @example
   * const engine = new Engine(120);
   * const car = new Car(engine);
   * car.getEnginePower(); => 120
   */
  getEnginePower() {
    throwNotImplementedError();
  }

  /**
   * @public
   * @param {Engine} engine
   * @returns {void}
   *
   * @example
   * const engine1 = new Engine(80);
   * const engine2 = new Engine(200);
   * const car = new Car(engine1);
   * car.changeEngine(engine2);
   * car.getEnginePower(); => 200
   */
  changeEngine(/* engine */) {
    throwNotImplementedError();
  }
}

module.exports = { Engine, Car };
