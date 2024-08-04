var createCounter = function (n) {
    let count = -1;
    return function () {
        count++;
        return n + count;
    };
};