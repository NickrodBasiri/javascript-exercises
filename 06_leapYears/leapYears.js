const leapYears = function(year) {


    // if year is divisible by four it is leap year
    // if year is not divisble by 100 && divisible by 400 it is leap year

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }       
    } else if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else {
        return false;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
