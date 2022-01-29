"use strict";

class StringValidator {
  
  isEmpty(value) {
    if (typeof value === 'string') return this.isStringEmpty(value);
    return this.isNumberEmpty(value);
  }

  isStringEmpty(value) {
    if (!value) return true;
    return false;
  }
    
  isNumberEmpty(value) {
    if (!value) return false;
    const response = !value && value !== 0;
    return response;
  }

  isGreaterThanMaxLength(value, maxLength) {
    if (!value) return false;
    return value.length > maxLength;
  }
    
  isShorterThanMinLength(value, minLength) {
    if (!value) return false;
    return value.length < minLength;
  }
    
  isDate(date) {
    if (!date) return false;
    const reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const response = reg.test(date);
    return response;
  }
    
  hasNoEspecialChar(value) {
    if (!value) return false;
    const reg = /^[0-9a-zA-Z \b]+$/;
    const response = reg.test(value);
    return response;
  }
    
  isNumber(value) {
    const isNumber = parseInt(value);
    const valueIsNotNumber = !isNumber && isNumber !== 0;
    if (valueIsNotNumber) return false;
    return true;
  }
    
  isEmail(value) {
    if (!value) return false;
    const regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const emailParts = value.split('@');
    if (emailParts.length !== 2) return false;
    const address = emailParts[1];
    const domainParts = address.split('.');
    if (domainParts.length < 1) return false;
    return regex.test(value);
  }
}

module.exports = StringValidator;