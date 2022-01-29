"use strict";

const NumberValidator = require('./src/numberValidator');
const StringValidator = require('./src/stringValidator');

class Validator {
   
  constructor() {
    this.number = new NumberValidator();
    this.string = new StringValidator();
  }

  /**
    * @param value string or number to validate
    * @returns true if the value is empty
  */
  isEmpty(value) {
    return this.string.isEmpty(value);
  }

  /**
    * @param value string to validate
    * @param maxLength Max length allowed
    * @returns True if the value has length greater than the max allowed
  */
  isGreaterThanMaxLength(value, maxLength) {
    return this.string.isGreaterThanMaxLength(value, maxLength);
  }

  /**
    * @param value string to validate
    * @param minLength Min length allowed
    * @returns True if the value has length shorter than allowed
  */
  isShorterThanMinLength(value, minLength) {
    return this.string.isShorterThanMinLength(value, minLength);
  }

  /**
    * @param date A string of a date that will be validated in format dd/mm/yy
    * @returns True if the date is write as dd/mm/yy, dd-mm-yy, or dd.mm.yy
  */
  isDate(date) {
    return this.string.isDate(date);
  }
  
  /**
    * @param value A string to verify if has special char
    * @returns True it if has special char
  */
  hasNoEspecialChar(value) {
    return this.string.hasNoEspecialChar(value);
  }
  
  /**
   * @param value A string to be verified if it's a valid email
   * @returns True if the string is a valid email
   */
  isEmail(value) {
    return this.string.isEmail(value);
  }
  
  /**
    * @param value A string that will be validated if it has just numbers
    * @returns True it if is a number
  */
  isNumber(value) {
    return this.string.isNumber(value);
  }
  
  /**
    * @param value A number that will be validated if it is a integer
    * @returns True if the value is a integer
  */
  isInt(value) {
    return this.number.isInt(value);
  }
  
  /**
    * @param value Number to be compared
    * @param numberToCompare Number to compare
    * @returns True if the value is greater than the number to compare
  */
  isGreater(value, numberToCompare) {
    return this.number.isGreater(value, numberToCompare);
  }
  
  /**
    * @param value Number to be compared
    * @param numberToCompare Number to compare
    * @returns True if the value is shorter than the number to compare
  */
  isShorter(value, numberToCompare) {
    return this.number.isShorter(value, numberToCompare);
  }
}

module.exports = Validator;