class StringValidator {

  public isEmpty(value:string|number) {
    if(typeof value === 'string') return this.isStringEmpty(value);
    return this.isNumberEmpty(value);
  }

  private isStringEmpty(value:string) {
    if(!value) return true;
    return false;
  }

  private isNumberEmpty(value:number) {
    if(!value) return false;
    const response = !value && value !== 0;
    return response;
  }

  public isGreaterThanMaxLength(value:string, maxLength:number) {
    if(!value) return false;
    return value.length > maxLength;
  }

  public isShorterThanMinLength(value:string, minLength:number) {
    if(!value) return false;
    return value.length < minLength;
  }

  public isDate(date:string) {
    if(!date) return false;
    const reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    const response = reg.test(date);
    return response;
  }

  public hasEspecialChar(value:string) {
    if(!value) return false;
    const reg = /^[0-9a-zA-Z \b]+$/;
    const response = reg.test(value);
    return response;
  }

  public isNumber(value:string) {
    const isNumber = parseInt(value);
    const valueIsNotNumber = !isNumber && isNumber !== 0;
    if(valueIsNotNumber) return false;
    return true;
  }

  public isEmail(value:string) {
    if(!value) return false;
    const regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const emailParts = value.split('@');
    if(emailParts.length !== 2) return false;
    const address = emailParts[1];
    const domainParts = address.split('.');
    if(domainParts.length < 1) return false;
    if(!regex.test(value)) return false;
  }
}

export default StringValidator;