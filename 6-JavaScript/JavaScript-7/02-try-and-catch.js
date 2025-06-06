try {
    // any piece of code
} catch {
    // executed only when there is an error in the code present in the 'try' block
}

// hello2s will not be printed
console.log("hello");
console.log("hello");
console.log(a);
console.log("hello2");
console.log("hello2");

// to avoid not executing the lines after which we have an error
console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch(error) {
    console.log("error: 'a' not defined");
    console.log(error);
}
console.log("hello2");
console.log("hello2");


