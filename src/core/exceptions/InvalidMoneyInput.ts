export class InvalidMoneyInput implements Error {
  constructor(
    public message: string =
      "tried to create money from an invalid string representation format should be integer or 'dd.dd' like '234' or '34.57' ",
    public statusCode: number = 500) {
  }
  name: string = 'INVALID_MONEY_INPUT';
}