const NumberValidator = require('./src/numberValidator');
const StringValidator = require('./src/stringValidator');

class Validator {

  private readonly number = new NumberValidator();
  private readonly string = new StringValidator();
 
  /**
    * @param value string or number to validate
    * @returns true if the value is empty 
  */
  public isEmpty(value:string|number) {
    return this.string.isEmpty(value);
  }

  /**
    * @param value string to validate
    * @param maxLength Max length allowed
    * @returns True if the value has length greater than the max allowed
  */
  public isGreaterThanMaxLength(value:string, maxLength:number) {
    return this.string.isGreaterThanMaxLength(value, maxLength);
  }

  /**
    * @param value string to validate
    * @param minLength Min length allowed
    * @returns True if the value has length shorter than allowed
  */
  public isShorterThanMinLength(value:string, minLength:number) {
    return this.string.isShorterThanMinLength(value, minLength);
  }

  /**
    * @param date A string of a date that will be validated in format dd/mm/yy 
    * @returns True if the date is write as dd/mm/yy, dd-mm-yy, or dd.mm.yy
  */
  public isDate(date:string) {
    return this.string.isDate(date);
  }

  /**
    * @param value A string to verify if has special char
    * @returns True it if has special char
  */
  public hasEspecialChar(value:string) {
    return this.string.hasEspecialChar(value);
  }
  
  /**
   * @param value A string to be verified if it's a valid email
   * @returns True if the string is a valid email
   */
  public isEmail(value:string) {
    return this.string.isEmail(value);
  }

  /**
    * @param value A string that will be validated if it has just numbers
    * @returns True it if is a number
  */
  public isNumber(value:string) {
    return this.string.isNumber(value);
  }

  /**
    * @param value A number that will be validated if it is a integer
    * @returns True if the value is a integer
  */
  public isInt(value:number) {
    return this.number.isInt(value);
  }

  /** 
    * @param value Number to be compared
    * @param numberToCompare Number to compare
    * @returns True if the value is greater than the number to compare
  */
  public isGreater(value:number, numberToCompare:number) {
    return this.number.isGreater(value, numberToCompare);
  }

  /** 
    * @param value Number to be compared
    * @param numberToCompare Number to compare
    * @returns True if the value is shorter than the number to compare
  */
  public isShorter(value:number, numberToCompare:number) {
    return this.number.isShorter(value, numberToCompare);
  }
}

export default Validator;