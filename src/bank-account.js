const {
  throwNotImplementedError,
} = require('../utils/throw-not-implemented-error.js');

/**
 * Represents a bank account with private balance.
 */
class BankAccount {
  /**
   * @type {number}
   */
  #balance;

  /**
   * @param {number} initialBalance - initial balance
   */
  constructor(/* initialBalance */) {
    throwNotImplementedError();
  }

  /**
   * Deposits money into the account.
   *
   * @public
   * @param {number} amount - amount to deposit
   * @returns {void}
   * @throws {Error} if amount is non-positive
   *
   * @example
   * const account = new BankAccount(50);
   * account.deposit(30);
   * account.getBalance(); => 80
   *
   * @example
   * const account = new BankAccount(50);
   * account.deposit(0); // throws Error: 'Deposit must be positive'
   */
  deposit(/* amount */) {
    throwNotImplementedError();
  }

  /**
   * Withdraws money from the account.
   *
   * @public
   * @param {number} amount - amount to withdraw
   * @returns {void}
   * @throws {Error} if insufficient balance
   *
   * @example
   * const account = new BankAccount(100);
   * account.withdraw(40);
   * account.getBalance(); => 60
   *
   * @example
   * const account = new BankAccount(50);
   * account.withdraw(60); // throws Error: 'Insufficient funds'
   */
  withdraw(/* amount */) {
    throwNotImplementedError();
  }

  /**
   * Returns the current balance.
   *
   * @public
   * @returns {number} current balance
   */
  getBalance() {
    throwNotImplementedError();
  }
}

module.exports = { BankAccount };
