const {
  throwNotImplementedError,
} = require('../utils/throw-not-implemented-error.js');

/**
 * @abstract
 *
 * Represents any employee.
 * Do not modify this class.
 */
class Employee {
  /**
   * @type {string}
   */
  #employeeName;

  /**
   * @param {string} employeeName - Employee name.
   */
  constructor(employeeName) {
    if (this.constructor === Employee) {
      throw new Error(
        'An object of an abstract "Employee" class cannot be created'
      );
    }
    this.#employeeName = employeeName;
  }

  /**
   * Returns the employee's name.
   *
   * @public
   * @returns {string}
   */
  get employeeName() {
    return this.#employeeName;
  }

  /**
   * Returns employee's salary (with bonus if applicable).
   * Must be implemented in subclasses.
   *
   * @public
   * @abstract
   * @returns {number}
   * @throws {Error}
   */
  getSalary() {
    throw new Error(
      'Method "getSalary" is abstract and must be implemented in a subclass'
    );
  }

  /**
   * Returns the role (class name).
   * Must be implemented in subclasses.
   *
   * @public
   * @abstract
   * @returns {string}
   * @throws {Error}
   */
  getRole() {
    throw new Error(
      'Method "getRole" is abstract and must be implemented in a subclass'
    );
  }
}

/**
 * Must correctly extend Employee.
 */
class Developer {
  /**
   * @param {string} name - Developer name.
   * @param {number} salary - Base salary.
   * @param {number} bonus - Bonus amount.
   */
  constructor(/* name, salary, bonus */) {
    throwNotImplementedError();
  }
}

/**
 * Must correctly extend Employee.
 */
class Manager {
  /**
   * @param {string} name - Manager name.
   * @param {number} salary - Base salary.
   * @param {number} bonus - Bonus amount.
   */
  constructor(/* name, salary, bonus */) {
    throwNotImplementedError();
  }
}

/**
 * Must correctly extend Employee.
 */
class Intern {
  /**
   * @param {string} name - Intern name.
   * @param {number} salary - Intern salary.
   */
  constructor(/* name, salary */) {
    throwNotImplementedError();
  }
}

/**
 * Represents a department that stores employees.
 */
class Department {
  /**
   * @type {Employee[]}
   */
  #employees = [];

  /**
   * Adds an employee to the department.
   *
   * @public
   * @param {unknown} employee - Object to add. Must be instance of Employee, otherwise an error is thrown.
   * @returns {void}
   * @throws {Error} throws Error: "Only instances of Employee can be added".
   */
  addEmployee(/* employee */) {
    throwNotImplementedError();
  }

  /**
   * Returns array of all employees in the department.
   *
   * @public
   * @returns {Employee[]}
   */
  getEmployees() {
    throwNotImplementedError();
  }

  /**
   * Returns all employees whose role matches the provided string.
   * Role must correspond to getRole(), which returns constructor name.
   *
   * @public
   * @param {string} role
   * @returns {Employee[]}
   */
  getEmployeesByRole(/* role */) {
    throwNotImplementedError();
  }

  /**
   * Returns the sum of salaries of all employees.
   *
   * @public
   * @returns {number} Total salary amount.
   */
  getTotalSalary() {
    throwNotImplementedError();
  }

  /**
   * Returns the average salary of all employees in the department.
   * If the department has no employees, returns 0.
   *
   * @public
   * @returns {number}
   */
  getAverageSalary() {
    throwNotImplementedError();
  }
}

module.exports = { Employee, Developer, Manager, Intern, Department };
