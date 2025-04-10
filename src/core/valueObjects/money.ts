import { NegativeBalanceException } from '../exceptions/NegativeBalance';
import { InvalidMoneyInput } from '../exceptions/InvalidMoneyInput';

export class Money {
  private readonly amount: number
  constructor(value: string) {
    if (!isNaN(Number.parseFloat(value))) {
      this.amount = Number.parseFloat(value) * 100;
    } else {
      throw new InvalidMoneyInput()
    }
  }

  toString() {
    return this.amount.toFixed(2)
  }

  rawAmount() {
    return this.amount
  }

  add(value: Money) {
    return new Money(
      (this.amount + value.rawAmount()).toFixed(2)
    )
  }
  take(value: Money) {
    if (this.lesserThan(value)) {
      new Money((this.amount - value.rawAmount()).toFixed(2))
    } else {
      throw new NegativeBalanceException()
    }
  }

  equal(other: Money): boolean {
    return this.amount == other.rawAmount();
  }

  biggerThan(other: Money): boolean {
    return this.amount > other.rawAmount()
  }

  lesserThan(other: Money): boolean { return this.amount < other.rawAmount()}
}