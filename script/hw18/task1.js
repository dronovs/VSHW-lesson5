'use strict'

// это мой старый код
function padStringNull (str, stringLength, sym = ' ', pos = true) {
    let i = str.length;
    let result = '';

    if (pos === true) {
        if (stringLength <= i) {
            result = str.substring(0, stringLength);
        } else {
            for (; i < stringLength; i++) {
                result = str += sym;
                console.log(result);
            }
        }
    } else if (pos === false) {
        if (stringLength <= i) {
            result = str.substring(0, stringLength);
        } else {
            let strArr = str.split();
            for (; i < stringLength; i++) {
                strArr.unshift(sym);
            }
            result = strArr.join('');
        }
    }
    return result;
}

function padString(str, strLength, symbol = ' ', right = true) {
    if (typeof(str) !== 'string') return 'argument is not string';
    if (typeof (strLength) !== 'number') return 'string length must be a number';

    if (strLength < strLength) return str.substring(0, strLength);
    if (strLength === str.length) return str;

    if (typeof(symbol) !== 'string' || symbol.length < 1) return 'symbol must be not a empty string';
    if (typeof(right) !== 'boolean' ) return 'right must be a boolean type';

    const symbolsValue = strLength - str.length;
    let stringOfSymbols = symbol.repeat(symbolsValue);
    return right ? str + stringOfSymbols : stringOfSymbols + str;

}
console.log(padString('0123456789', 15, '*',false));