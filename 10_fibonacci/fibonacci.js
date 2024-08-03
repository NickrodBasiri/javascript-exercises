const fibonacci = function(num) {
    const sequence = [1, 1];
    if (num == 0) {
        return 0;
    }
    if (num < 0) {
        return "OOPS";
    }
    for (i = 1; i <= num - 2; i++) {
        sequence.push(sequence[i] + sequence[i - 1]);
    }
    return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
