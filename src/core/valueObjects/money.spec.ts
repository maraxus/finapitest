import { Money } from './money';

describe('MoneyService', () => {

  it('should be create money', () => {
    const inputStr = "232.22"
    const myMoney = new Money(inputStr)
    expect(myMoney).toBeDefined();
    console.log("in decimals: " + Number.parseFloat(inputStr) * 100)
    expect(myMoney.rawAmount()).toBe(Number.parseFloat(inputStr) * 100)
  });
});
