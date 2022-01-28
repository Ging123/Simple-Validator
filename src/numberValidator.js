"use strict";

class NumberValidator {
  
  isInt(value) {
    return Number.isInteger(value);
  }
 
  isGreater(value, numberToCompare) {
    return value > numberToCompare;
  }

  isShorter(value, numberToCompare) {
    return value < numberToCompare;
  }
}
module.exports = NumberValidator;
