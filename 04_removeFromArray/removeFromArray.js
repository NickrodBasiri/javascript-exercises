const removeFromArray = function(array, item) {
    
    for (i = 0; i <= array.length; i++) {
        if (array[i] == item) {
            array = array.slice(i, 1);
            return array;
        }
        return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
