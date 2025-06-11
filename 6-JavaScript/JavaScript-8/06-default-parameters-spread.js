// ================================
// DEFAULT PARAMETERS & SPREAD OPERATOR IN JAVASCRIPT
// ================================
// Default parameters allow you to set default values for function parameters
// when no argument is passed or undefined is passed
// Spread operator (...) allows an iterable to be expanded

console.log("=== DEFAULT PARAMETERS EXAMPLES ===");

// ================================
// 1. BASIC DEFAULT PARAMETERS
// ================================

// Function without default parameters (old way)
function greetOld(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

console.log("Without defaults:");
greetOld(); // Hello undefined, you are undefined years old
greetOld("John"); // Hello John, you are undefined years old

// Function with default parameters (new way)
function greet(name = "Guest", age = 18) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

console.log("\nWith defaults:");
greet(); // Hello Guest, you are 18 years old
greet("John"); // Hello John, you are 18 years old
greet("Jane", 25); // Hello Jane, you are 25 years old

// ================================
// 2. DEFAULT PARAMETERS WITH EXPRESSIONS
// ================================

function calculateArea(length = 5, width = length) {
    return length * width;
}

console.log("\n=== EXPRESSION DEFAULTS ===");
console.log("No params:", calculateArea()); // 25 (5 * 5)
console.log("One param:", calculateArea(8)); // 64 (8 * 8)
console.log("Both params:", calculateArea(6, 4)); // 24 (6 * 4)

// ================================
// 3. DEFAULT PARAMETERS WITH ARRAYS AND OBJECTS
// ================================

function processStudent(name = "Unknown", subjects = ["Math", "Science"], info = {grade: "A", age: 16}) {
    console.log(`Student: ${name}`);
    console.log(`Subjects: ${subjects.join(", ")}`);
    console.log(`Grade: ${info.grade}, Age: ${info.age}`);
}

console.log("\n=== COMPLEX DEFAULTS ===");
processStudent();
processStudent("Alice", ["Physics", "Chemistry"], {grade: "B+", age: 17});

// ================================
// 4. ARROW FUNCTIONS WITH DEFAULT PARAMETERS
// ================================

const multiply = (a = 1, b = 1) => a * b;

console.log("\n=== ARROW FUNCTION DEFAULTS ===");
console.log("No params:", multiply()); // 1
console.log("One param:", multiply(5)); // 5
console.log("Both params:", multiply(3, 4)); // 12

// ================================
// 5. UNDEFINED VS NULL
// ================================

function testDefaults(value = "default") {
    return value;
}

console.log("\n=== UNDEFINED VS NULL ===");
console.log("No param:", testDefaults()); // "default"
console.log("Undefined:", testDefaults(undefined)); // "default"
console.log("Null:", testDefaults(null)); // null (not default!)
console.log("Empty string:", testDefaults("")); // "" (not default!)

// ================================
// 6. SIMPLE SUM FUNCTION EXAMPLE
// ================================

function sum(a, b = "undefined") {
    return a + b;
}

console.log("\n=== SUM FUNCTION EXAMPLE ===");
console.log("sum(1, 3):", sum(1, 3)); // 4
console.log("sum(1):", sum(1)); // a = 1, b = "undefined"

// ================================
// 7. SPREAD OPERATOR
// ================================
// The spread operator (...) allows an iterable to be expanded
// in places where zero or more arguments or elements are expected

console.log("\n=== SPREAD OPERATOR EXAMPLES ===");

// ================================
// 7.1. SPREAD WITH FUNCTION ARGUMENTS
// ================================

// Using Math.min with individual arguments
console.log("Math.min(1, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 0):", Math.min(1, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 0)); // 0

// Array example
let arr = [1, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 0];
console.log("arr:", arr);

// Using spread operator to pass array elements as individual arguments
console.log("Math.min(...arr):", Math.min(...arr)); // 0

// Adding element to array
console.log("arr.push(-1):", arr.push(-1)); // returns new length: 15

// ================================
// 7.2. SPREAD WITH ARRAYS
// ================================

console.log("\n=== ARRAY SPREADING ===");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combining arrays
const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined); // [1, 2, 3, 4, 5, 6]

// Adding elements while spreading
const withExtra = [0, ...arr1, 3.5, ...arr2, 7];
console.log("With extra elements:", withExtra); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Copying an array - IMPORTANT DIFFERENCE
const copy = [...arr1];
console.log("Array copy:", copy); // [1, 2, 3]

// Demonstrating the difference between spread copy and reference
console.log("\n--- COPY vs REFERENCE ---");
const original = [1, 2, 3];

// With spread (creates new array)
const spreadCopy = [...original];
spreadCopy.push(4);
console.log("original after spread copy modification:", original); // [1, 2, 3] - unchanged
console.log("spreadCopy:", spreadCopy); // [1, 2, 3, 4]

// Without spread (same reference)
const reference = original;
reference.push(5);
console.log("original after reference modification:", original); // [1, 2, 3, 5] - changed!
console.log("reference:", reference); // [1, 2, 3, 5]

// ================================
// 7.3. SPREAD WITH OBJECTS
// ================================

console.log("\n=== OBJECT SPREADING ===");

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// Combining objects
const merged = {...obj1, ...obj2};
console.log("Merged objects:", merged); // {a: 1, b: 2, c: 3, d: 4}

// Overriding properties
const override = {...obj1, b: 10, ...obj2};
console.log("With override:", override); // {a: 1, b: 10, c: 3, d: 4}

// Object copying with spread
const originalObj = {name: "John", age: 25};
const copiedObj = {...originalObj};
copiedObj.age = 30;
console.log("Original:", originalObj); // {name: "John", age: 25} - unchanged
console.log("Copied:", copiedObj); // {name: "John", age: 30}

// Spreading array into object (array indices become object keys)
const colors = ["red", "green", "blue"];
const colorObj = {...colors};
console.log("Array to object:", colorObj); // {0: "red", 1: "green", 2: "blue"}

// Combining array spread with existing properties
const mixedObj = {name: "palette", ...colors, count: colors.length};
console.log("Mixed object:", mixedObj); // {name: "palette", 0: "red", 1: "green", 2: "blue", count: 3}

// ================================
// 7.4. SPREAD WITH STRINGS
// ================================

console.log("\n=== STRING SPREADING ===");

const str = "hello";
const letters = [...str];
console.log("String to array:", letters); // ['h', 'e', 'l', 'l', 'o']

// Spreading string into object (character indices become object keys)
const word = "hello";
const letterObj = {...word};
console.log("String to object:", letterObj); // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}

// Combining string spread with other properties
const wordInfo = {word: "hello", ...word, length: word.length};
console.log("Word info object:", wordInfo); // {word: "hello", 0: "h", 1: "e", 2: "l", 3: "l", 4: "o", length: 5}

// ================================
// 7.5. REST PARAMETERS (opposite of spread)
// ================================

console.log("\n=== REST PARAMETERS ===");

function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("sumAll(1, 2, 3, 4, 5):", sumAll(1, 2, 3, 4, 5)); // 15
console.log("sumAll(...arr1):", sumAll(...arr1)); // 6

// Array destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("first:", first); // 1
console.log("second:", second); // 2
console.log("rest:", rest); // [3, 4, 5]