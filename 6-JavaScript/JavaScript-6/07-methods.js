// methods are functions of an object
const calculator = {
    num: 55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    multiply: function(a,b) {
        return a*b;
    }
};

// shorthand to define methods
const calculator2 = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    },
    multiply(a,b) {
        return a*b;
    }
};

console.log(calculator.num); // 5
console.log(calculator.add(2,3)); // 5