class NumberValidator {

  public isInt(value:number) {
    return Number.isInteger(value);
  }

  public isGreater(value:number, numberToCompare:number) {
    return value > numberToCompare;
  }

  public isShorter(value:number, numberToCompare:number) {
    return value < numberToCompare;
  }
}

export default NumberValidator;