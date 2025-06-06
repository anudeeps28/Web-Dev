// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (implicit return)
const add2 = (a, b) => a + b;

// Arrow function (explicit return)
const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  console.log(a/b);
};

// Testing the functions
console.log("Regular function:", add(5, 3));
console.log("Arrow function (implicit):", add2(10, 7));
console.log("Arrow function (explicit):", multiply(4, 6));
divide(20, 4);