'use strict'
function padString (str, stringLength, sym = ' ', pos = true) {
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

console.log(padString('0123456789', 15, '*',false));