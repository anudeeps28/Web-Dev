// ================================
// 1. EVERY METHOD
// ================================
// every() returns TRUE only if ALL elements pass the test
// Returns FALSE if even one element fails the test
// Stops checking as soon as it finds a false condition

console.log("=== EVERY METHOD EXAMPLES ===");

console.log("All even [2,4,6]:", [2,4,6].every((element) => element%2 == 0)); // true

console.log("All even [2,4,6,10]:", [2,4,6,10].every((element) => element%2 == 0)); // true

console.log("Mixed [1,2,3,4,10,1]:", [1,2,3,4,10,1].every((element) => element%2 == 0)); // false

// ================================
// 2. SOME METHOD
// ================================
// some() returns TRUE if AT LEAST ONE element passes the test
// Returns FALSE only if ALL elements fail the test
// Stops checking as soon as it finds a true condition

console.log("\n=== SOME METHOD EXAMPLES ===");

console.log("Has even [1,2,3,4,10,1]:", [1,2,3,4,10,1].some((element) => element%2 == 0)); // true

console.log("Has even [1,2,5]:", [1,2,5].some((element) => element%2 == 0)); // false (only 2 is even)

console.log("Has even [2,4,6,8]:", [2,4,6,8].some((element) => element%2 == 0)); // true

// ================================
// KEY DIFFERENCES
// ================================
// every(): ALL elements must pass → like AND operator
// some(): AT LEAST ONE element must pass → like OR operator


