// what is the output of the following program
let greet = "hello"; // global scope

function changeGreet() {
    let greet = "namaste"; // function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); // lexical scope
    }
}

console.log(greet);
changeGreet();