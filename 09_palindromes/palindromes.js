const palindromes = function (str) {

    const validChar = "abcdefghijklmnopqrstuvwxyz1234567890";

    const goodString = str
    .toLowerCase()
    .split("")
    .filter((character) => validChar.includes(character))
    .join("");

    const reversedString = goodString.split("").reverse().join("");

    return goodString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
