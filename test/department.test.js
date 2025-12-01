import { describe, it } from 'mocha';
import assert from 'node:assert';

import {
  Department,
  Developer,
  Employee,
  Intern,
  Manager,
} from '../src/department.js';
import { assertNoComments } from '../utils/assert-no-comments.js';
import { optional } from '../utils/optional.js';

it.optional = optional;

describe('Department', () => {
  describe('Employee subclasses', () => {
    optional('Developer should extend Employee class', () => {
      assert.throws(
        () => new Employee('Lana'),
        /An object of an abstract "Employee" class cannot be created/
      );
      assert.ok(new Developer('Lana', 1000, 500) instanceof Employee);
    });

    optional('Manager should extend Employee class', () => {
      assert.throws(
        () => new Employee('Lana'),
        /An object of an abstract "Employee" class cannot be created/
      );
      assert.ok(new Manager('Lana', 1000, 500) instanceof Employee);
    });

    optional('Intern should extend Employee class', () => {
      assert.throws(
        () => new Employee('Lana'),
        /An object of an abstract "Employee" class cannot be created/
      );
      assert.ok(new Intern('Lana', 1000) instanceof Employee);
    });

    optional(
      'Developer instance should return correct name, role and salary',
      () => {
        const dev = new Developer('Lana', 1000, 500);

        assert.strictEqual(dev.employeeName, 'Lana');
        assert.strictEqual(dev.getRole(), Developer.name);
        assert.strictEqual(dev.getSalary(), 1500);

        const getRoleStr = dev.getRole.toString();
        assert.ok(
          getRoleStr.includes('constructor'),
          'The role corresponds to the class name. To obtain the role, you must use a call to the class constructor'
        );
      }
    );

    optional(
      'Manager instance should return correct name, role and salary',
      () => {
        const mgr = new Manager('Nicole', 1000, 500);

        assert.strictEqual(mgr.employeeName, 'Nicole');
        assert.strictEqual(mgr.getRole(), Manager.name);
        assert.strictEqual(mgr.getSalary(), 1500);

        const getRoleStr = mgr.getRole.toString();
        assert.ok(
          getRoleStr.includes('constructor'),
          'The role corresponds to the class name. To obtain the role, you must use a call to the class constructor'
        );
      }
    );

    optional(
      'Intern instance should return correct name, role and salary',
      () => {
        const intern = new Intern('Elsa', 1000);

        assert.strictEqual(intern.employeeName, 'Elsa');
        assert.strictEqual(intern.getRole(), Intern.name);
        assert.strictEqual(intern.getSalary(), 1000);

        const getRoleStr = intern.getRole.toString();
        assert.ok(
          getRoleStr.includes('constructor'),
          'The role corresponds to the class name. To obtain the role, you must use a call to the class constructor'
        );
      }
    );
  });

  describe('Department instance', () => {
    optional('should add employee', () => {
      const dept = new Department();

      const dev1 = new Developer('Lana', 1000, 500);
      const dev2 = new Developer('Nicole', 1000, 500);

      dept.addEmployee(dev1);
      dept.addEmployee(dev2);

      assert.strictEqual(dept.getEmployees().length, 2);
    });

    optional('should throw when adding invalid employee', () => {
      const dept = new Department();

      const dev = new Developer('Lana', 1000, 500);
      dept.addEmployee(dev);

      const invalidValues = [
        null,
        undefined,
        123,
        'string',
        true,
        false,
        {},
        [],
        () => {},
      ];
      for (const invalid of invalidValues) {
        assert.throws(
          () => dept.addEmployee(invalid),
          /Only instances of Employee can be added/
        );
      }
    });

    optional('should calculate total department salary', () => {
      const dept = new Department();

      const dev1 = new Developer('Lana', 1000, 500);
      const dev2 = new Developer('Nicole', 1000, 500);
      const intern = new Intern('Elsa', 1000);

      dept.addEmployee(dev1);
      dept.addEmployee(dev2);
      dept.addEmployee(intern);

      assert.strictEqual(dept.getTotalSalary(), 4000);
    });

    optional('should filter employees by role', () => {
      const dept = new Department();

      const dev1 = new Developer('Lana', 1000, 500);
      const dev2 = new Developer('Nicole', 1000, 500);
      const mgr = new Manager('Nicole', 1000, 500);
      const intern = new Intern('Elsa', 1000);

      dept.addEmployee(dev1);
      dept.addEmployee(dev2);
      dept.addEmployee(mgr);
      dept.addEmployee(intern);

      const devs = dept.getEmployeesByRole(Developer.name);
      assert.deepStrictEqual(devs, [dev1, dev2]);

      const interns = dept.getEmployeesByRole(Intern.name);
      assert.deepStrictEqual(interns, [intern]);
    });

    optional('should calculate average department salary', () => {
      const dept = new Department();

      const dev1 = new Developer('Lana', 1000, 500);
      const dev2 = new Developer('Nicole', 1000, 500);
      const dev3 = new Developer('Emma', 2000, 1000);

      dept.addEmployee(dev1);
      dept.addEmployee(dev2);
      dept.addEmployee(dev3);

      assert.strictEqual(dept.getAverageSalary(), 2000);
    });

    optional('should return 0 average salary for empty department', () => {
      const dept = new Department();

      assert.strictEqual(dept.getAverageSalary(), 0);
    });
  });

  optional('should not contain commentaries', () => {
    const dev = new Developer('', 0, 0);
    const mngr = new Manager('', 0, 0);
    const intern = new Intern('', 0);
    const dep = new Department();

    [
      dev.getSalary,
      dev.getRole,
      mngr.getSalary,
      mngr.getRole,
      intern.getSalary,
      intern.getRole,
      dep.addEmployee,
      dep.getAverageSalary,
      dep.getEmployees,
      dep.getEmployeesByRole,
      dep.getTotalSalary,
    ].forEach((fn) => assertNoComments(fn));
  });
});
