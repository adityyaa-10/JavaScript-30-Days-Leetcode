var expect = function (val) {

    const toBe = function (n) {
        if (val === n) return true;
        throw new Error("Not Equal");
    }

    const notToBe = function (x) {
        if (val !== x) return true;
        throw new Error("Equal");
    }

    return { toBe, notToBe }
};