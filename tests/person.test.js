import assert from 'node:assert';
import { beforeEach, describe } from 'node:test';

import { Person } from '../src/person.js';
import { assertNoComments } from '../utils/assert-no-comments.js';
import { optional } from '../utils/optional.js';

describe('Person', () => {
  beforeEach(() => {
    Person.count = 0;
    Person.totalWeight = 0;
    Person.totalHeight = 0;
  });

  optional(
    'should correctly construct a person and update count and totals',
    () => {
      const u1 = new Person(70, 180);
      const u2 = new Person(80, 200);

      assert.strictEqual(u1.weight, 70);
      assert.strictEqual(u1.height, 180);

      assert.strictEqual(u2.weight, 80);
      assert.strictEqual(u2.height, 200);

      assert.strictEqual(Person.count, 2);
      assert.strictEqual(Person.totalWeight, 150);
      assert.strictEqual(Person.totalHeight, 380);
    }
  );

  optional('should update "totalWeight" when "weight" changes', () => {
    const u1 = new Person(70, 180);
    const u2 = new Person(80, 200);

    u1.weight = 90;
    u2.weight = 110;

    assert.strictEqual(Person.totalWeight, 200);
  });

  optional('should update "totalHeight" when "height" changes', () => {
    const u1 = new Person(70, 180);
    const u2 = new Person(80, 200);

    u1.height = 200;
    u2.height = 200;

    assert.strictEqual(Person.totalHeight, 400);
  });

  optional('should correctly calculate average weight', () => {
    const weights = [60, 70, 80, 90, 100, 110, 300];
    weights.forEach((weight) => new Person(weight, 180));

    const expected = weights.reduce((s, w) => s + w, 0) / weights.length;

    assert.strictEqual(Person.averageWeight(), expected);
  });

  optional('should correctly calculate average height', () => {
    const heights = [155, 160, 170, 180, 190, 200, 210];
    heights.forEach((height) => new Person(90, height));

    const expected = heights.reduce((s, w) => s + w, 0) / heights.length;

    assert.strictEqual(Person.averageHeight(), expected);
  });

  optional('should return 0 for averages when no person created', () => {
    assert.strictEqual(Person.count, 0);
    assert.strictEqual(Person.totalWeight, 0);
    assert.strictEqual(Person.totalHeight, 0);

    assert.strictEqual(Person.averageWeight(), 0);
    assert.strictEqual(Person.averageHeight(), 0);
  });

  optional('should use static properties for average calculations', () => {
    new Person(50, 160);
    new Person(70, 180);

    Person.totalWeight = 500;
    Person.totalHeight = 1000;
    Person.count = 5;

    const expectedAverageWeight = Person.totalWeight / Person.count;
    const expectedAverageHeight = Person.totalHeight / Person.count;

    assert.strictEqual(Person.averageWeight(), expectedAverageWeight);
    assert.strictEqual(Person.averageHeight(), expectedAverageHeight);
  });

  optional('should not contain commentaries', () => {
    [Person.averageHeight, Person.averageWeight].forEach((fn) =>
      assertNoComments(fn)
    );
  });
});
