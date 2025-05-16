// it is a way of defining a function (nameless) and storing it in a variable
const sum = function(a,b) {
    return a+b;
}

sum(1,2) // 3

// ---------------------

let hello = function() {
    console.log("hello");
}

hello(); // hello