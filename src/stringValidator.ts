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
    const response = !value && value !== 0;
    return response;
  }

  public isGreaterThanMaxLength(value:string, maxLength:number) {
    return value.length > maxLength;
  }

  public isShorterThanMinLength(value:string, minLength:number) {
    return value.length < minLength;
  }

  public isDate(date:string) {
    const reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    const response = reg.test(date);
    return response;
  }

  public hasEspecialChar(value:string) {
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
}

export default StringValidator;