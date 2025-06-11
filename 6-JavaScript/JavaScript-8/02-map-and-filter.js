// ================================
// MAP AND FILTER METHODS IN JAVASCRIPT
// ================================

// ================================
// 1. MAP METHOD
// ================================
// map() creates a new array by transforming each element
// Original array remains unchanged
// Always returns an array of the same length

console.log("=== MAP METHOD EXAMPLES ===");

// Example 1: Basic transformation - doubling numbers
let num = [1,2,3,4];
let double = num.map( (element) => {
    return element*2;
});
console.log("Original array:", num);
console.log("Doubled array:", double);

// Example 2: Working with objects - calculating GPA
let students = [{
    name: "aman",
    marks: 95,
}, {
    name: "shradha",
    marks: 94.4,
}, {
    name: "rajat",
    marks: 92,
}];

let gpa = students.map( (student) => {
    return student.marks/10;
});
console.log("Student GPAs:", gpa);

// ================================
// 2. FILTER METHOD
// ================================
// filter() creates a new array with elements that pass a test
// Returns only elements where the condition is true
// Can return fewer elements than the original array

console.log("\n=== FILTER METHOD EXAMPLES ===");

let num2 = [1,2,3,4,5,6,7,8,9,10,11,12];

// Example 1: Filter even numbers
let even = num2.filter( (element) => {
    return element%2 == 0; // even -> true, odd -> false
});
console.log("Even numbers:", even);

// Example 2: Filter numbers less than 5
let lessThan5 = num2.filter( (element) => {
    return element < 5;
});
console.log("Numbers less than 5:", lessThan5);

// ================================
// 3. COMBINING MAP AND FILTER
// ================================
console.log("\n=== COMBINING MAP AND FILTER ===");

// Filter high-performing students, then calculate their GPA
// Note: Cannot use only map() here because:
// - map() always returns same length array (3 elements)
// - filter() returns subset based on condition (2 elements)
// - We want only qualifying students, not all students
let topStudents = students
    .filter(student => student.marks > 93)
    .map(student => ({
        name: student.name,
        gpa: student.marks/10
    }));

console.log("Top students with GPA:", topStudents);