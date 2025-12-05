const { describe, it } = require('mocha');
const assert = require('node:assert');

const { BankAccount } = require('../src/bank-account.js');
const { assertNoComments } = require('../utils/assert-no-comments.js');
const { optional } = require('../utils/optional.js');

it.optional = optional;

describe('BankAccount', () => {
  it.optional('should initialize with starting balance', () => {
    const account = new BankAccount(100);

    assert.strictEqual(account.getBalance(), 100);
  });

  it.optional('should deposit money', () => {
    const account = new BankAccount(50);
    account.deposit(30);

    assert.strictEqual(account.getBalance(), 80);
  });

  it.optional('should throw error on non-positive deposit', (ctx) => {
    const account = new BankAccount(50);

    try {
      account.deposit(0);
    } catch (error) {
      if (error.message === 'Not implemented') {
        ctx.skip();
      } else {
        assert.throws(() => account.deposit(0), /Deposit must be positive/);
      }
    }
  });

  it.optional('should withdraw money', () => {
    const account = new BankAccount(100);
    account.withdraw(40);

    assert.strictEqual(account.getBalance(), 60);
  });

  it.optional(
    'should throw error when withdrawing more than balance',
    (ctx) => {
      const account = new BankAccount(50);

      try {
        account.withdraw(60);
      } catch (error) {
        if (error.message === 'Not implemented') {
          ctx.skip();
        } else {
          assert.throws(() => account.withdraw(60), /Insufficient funds/);
        }
      }
    }
  );

  it.optional('should return correct balance with getBalance()', (ctx) => {
    const account = new BankAccount(100);

    assert.strictEqual(account.getBalance(), 100);

    account.deposit(100);

    assert.strictEqual(account.getBalance(), 200);

    account.withdraw(50);

    assert.strictEqual(account.getBalance(), 150);
  });

  it.optional('should not contain commentaries', () => {
    const acc = new BankAccount(0);

    [acc.deposit, acc.getBalance, acc.withdraw].forEach((fn) =>
      assertNoComments(fn)
    );
  });
});
