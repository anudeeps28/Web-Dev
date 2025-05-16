/**
 * FUNCTION SCOPE:
 * variables defined inside a function are not accessible outside the function
 */
let sum = 54; // global scope
let sum2 = 20;
function calculateSum(a,b) {
    let sum = a+b; // function scope
    console.log(sum); // 3
    console.log(sum2); // 20
}
calculateSum(1,2);
console.log(sum); // 54

/**
 * BLOCK SCOPE:
 * variable declared inside a {} cannot be accessed from outside the block
 */
{
    let a=25;
}
console.log(a); // error: not defined

for(let i=0; i<6; i++) {
    console.log(i); // block scope
}
console.log(i) // ERROR

let age=25;
if(age>=18) {
    let str = "adult"; // block scope
}

console.log(str) // ERROR

/**
 * LEXICAL SCOPE:
 * variable defined outside the function can be accessible inside another function defined after 
 * variable declaration.
 * the opposite of this is NOT TRUE.
 */
function outerFunction() {
    let x=5;
    let y=6;
    function innerFunction() { // function scope
        console.log(x);
    }
    innerFunction();
}

