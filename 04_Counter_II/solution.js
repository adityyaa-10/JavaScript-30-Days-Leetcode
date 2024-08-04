var createCounter = function (init) {
    let curr = init
    const increment = function () {
        curr += 1;
        return curr;
    }

    const decrement = function () {
        curr -= 1;
        return curr;
    }

    const reset = function () {
        curr = init;
        return curr;
    }

    return { increment, decrement, reset };
};