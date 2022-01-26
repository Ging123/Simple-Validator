# simple-validator-node

## How to Use

First thing that you need to do is install the package on your project using this command on your terminal:
```
npm i simple-validator-node
```
After that you can use the **Validator class** to validate your codes: 
```
import Validator from 'simple-validator-node';

const validator = new Validator();
const name = 'jack';
validator.isEmpty(name); //false
```

## Methods

### isEmpty

Verify if string is empty.

```
validator.isEmpty(value);
```

### isGreaterThanMaxLength

Verify if string is greater than a max length setted by you.

```
validator.isGreaterThanMaxLength(value, maxLength)
```

### isShorterThanMinLength

Verify if string is shorter than a min length setted by you.

```
validator.isShorterThanMinLength(value, minLength);
```

### isDate

Verify if string is a date that is write as dd/mm/yy, dd-mm-yy, or dd.mm.yy

```
validator.isDate(date);
```

### hasEspecialChar

Verify if string has special char

```
validator.hasEspecialChar(value);
```

### isEmail

Verify if string is a valid email

```
validator.isEmail(value);
```

### isNumber

Verify if string just have numbers 

```
validator.isNumber(value);
```

### isInt

Verify if number is an integer

```
validator.isInt(number);
```

### isGreater

Verify if a number is greater than a value that you set

```
validator.isGreater(number, valueToCompare);
```

### isShorter

Verify if a number is shorter than a value that you set

```
validator.isShorter(number, valueToCompare);
```