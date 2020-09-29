exports.min = function min(array) {
    if (typeof array != "undefined" &&
        array != null &&
        array.length != null &&
        array.length > 0) {
        minimal = 100000;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minimal) {
                minimal = array[i];
            }
        }
        return minimal;
    }
    return 0;
}

exports.max = function max(array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        maximal = -1000;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maximal) {
                maximal = array[i];
            }
        }
        return maximal;
    }
    return 0;
}

exports.avg = function avg(array) {

    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
    return 0;
}