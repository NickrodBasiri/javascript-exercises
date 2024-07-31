const sumAll = function(num1, num2) {
    let smaller = num1;
    let larger = num2;
    
    if (!Number.isInteger(num1) || num1 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(num2) || num2 < 0) {
        return "ERROR";
    }

    if (num1 > num2) {
        larger = num1;
        smaller = num2;
    }

    let sum = 0;
    for (i = smaller; i <= larger; i++) {
        sum = sum + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
