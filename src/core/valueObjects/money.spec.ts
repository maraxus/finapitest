import { Money } from './money';

describe('MoneyService', () => {

  it('should create money with a integer value', () => {
    const inputStr = 3425
    const myMoney = new Money(inputStr)
    expect(myMoney.rawAmount()).toBe(inputStr)
  });

  it('should create with a float value in cents', () => {
    const [inputA, inputB, inputC, inputD, inputE] = [124.5, 124.56, 124.563, 0.75, 0.7]
    const [myMoneyA, myMoneyB, myMoneyC, myMoneyD, myMoneyE] = [new Money(inputA), new Money(inputB), new Money(inputC), new Money(inputD), new Money(inputE)]
    expect(myMoneyA.rawAmount()).toBe(inputA * 100)
    expect(myMoneyB.rawAmount()).toBe(inputB * 100)
    expect(myMoneyC.rawAmount()).toBe(Number.parseFloat(inputC.toFixed(2)) * 100 )
    expect(myMoneyD.rawAmount()).toBe(75 )
    expect(myMoneyE.rawAmount()).toBe(70 )
  })
});
