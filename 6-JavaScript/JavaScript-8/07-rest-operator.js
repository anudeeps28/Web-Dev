// ================================
// REST OPERATOR IN JAVASCRIPT
// ================================
// The rest operator (...) collects multiple elements into a single array or object
// It's the opposite of the spread operator

console.log("=== REST OPERATOR EXAMPLES ===");

// ================================
// 1. REST PARAMETERS IN FUNCTIONS
// ================================

console.log("\n=== REST PARAMETERS ===");

// Collecting all arguments into an array
function sum(...numbers) {
    console.log("numbers array:", numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // 15
console.log("sum(10, 20):", sum(10, 20)); // 30
console.log("sum(5):", sum(5)); // 5

// Rest parameters with regular parameters
function greet(greeting, ...names) {
    console.log("greeting:", greeting);
    console.log("names:", names);
    return `${greeting} ${names.join(", ")}!`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));
console.log(greet("Hi", "John"));

// Finding maximum with rest parameters
function findMax(...nums) {
    if (nums.length === 0) return undefined;
    return Math.max(...nums); // Using spread to pass to Math.max
}

console.log("findMax(5, 2, 9, 1, 7):", findMax(5, 2, 9, 1, 7)); // 9

// ================================
// 2. REST IN ARRAY DESTRUCTURING
// ================================

console.log("\n=== ARRAY DESTRUCTURING WITH REST ===");

const numbers = [1, 2, 3, 4, 5];

// Basic rest in destructuring
const [first, ...rest] = numbers;
console.log("first:", first); // 1
console.log("rest:", rest); // [2, 3, 4, 5]

// Multiple variables with rest
const [a, b, ...remaining] = [10, 20, 30, 40, 50];
console.log("a:", a); // 10
console.log("b:", b); // 20
console.log("remaining:", remaining); // [30, 40, 50]

// Rest with empty array
const [x, ...empty] = [100];
console.log("x:", x); // 100
console.log("empty:", empty); // []

// Swapping variables using destructuring
let val1 = 5, val2 = 10;
[val1, val2] = [val2, val1];
console.log("After swap - val1:", val1, "val2:", val2); // 10, 5

// ================================
// 3. REST IN OBJECT DESTRUCTURING
// ================================

console.log("\n=== OBJECT DESTRUCTURING WITH REST ===");

const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    profession: "Developer"
};

// Basic object destructuring with rest
const {name, age, ...otherInfo} = person;
console.log("name:", name); // "John"
console.log("age:", age); // 30
console.log("otherInfo:", otherInfo); // {city: "New York", country: "USA", profession: "Developer"}

// Renaming with rest
const {name: fullName, ...details} = person;
console.log("fullName:", fullName); // "John"
console.log("details:", details); // {age: 30, city: "New York", country: "USA", profession: "Developer"}

// Nested object destructuring with rest
const user = {
    id: 1,
    profile: {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        phone: "123-456-7890"
    },
    settings: {
        theme: "dark",
        notifications: true
    }
};

const {id, profile: {firstName, ...profileRest}, ...userRest} = user;
console.log("id:", id); // 1
console.log("firstName:", firstName); // "Alice"
console.log("profileRest:", profileRest); // {lastName: "Smith", email: "alice@example.com", phone: "123-456-7890"}
console.log("userRest:", userRest); // {settings: {theme: "dark", notifications: true}}

// ================================
// 4. REST VS SPREAD COMPARISON
// ================================

console.log("\n=== REST vs SPREAD COMPARISON ===");

// SPREAD: Expands elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Spreading arrays
console.log("Spread result:", combined); // [1, 2, 3, 4, 5, 6]

// REST: Collects elements
function showRest(...items) {
    console.log("Rest collected:", items); // Collecting into array
}
showRest(1, 2, 3, 4, 5, 6);

// Using both together
function processNumbers(multiplier, ...nums) {
    return nums.map(num => num * multiplier);
}
console.log("processNumbers(2, 1, 2, 3, 4):", processNumbers(2, 1, 2, 3, 4)); // [2, 4, 6, 8]

// ================================
// 5. PRACTICAL EXAMPLES
// ================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Logger function that accepts any number of messages
function logger(level, ...messages) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${level.toUpperCase()}:`, ...messages);
}

logger("info", "User logged in", "Session started");
logger("error", "Database connection failed", "Retrying...");

// Function to create object with some properties and rest as metadata
function createUser(name, email, ...metadata) {
    return {
        name,
        email,
        metadata: metadata.length > 0 ? metadata : null
    };
}

console.log("createUser result:", createUser("John", "john@email.com", "admin", "verified"));

// Array operations with rest
function removeFirst(arr) {
    const [, ...withoutFirst] = arr;
    return withoutFirst;
}

console.log("removeFirst([1, 2, 3, 4]):", removeFirst([1, 2, 3, 4])); // [2, 3, 4]

// Object operations with rest
function updateUser(user, updates) {
    const {id, ...updatableFields} = user;
    return {
        id, // Keep original id
        ...updatableFields, // Spread existing fields
        ...updates // Apply updates
    };
}

const originalUser = {id: 1, name: "John", age: 30, city: "NYC"};
const updatedUser = updateUser(originalUser, {age: 31, country: "USA"});
console.log("Updated user:", updatedUser); // {id: 1, name: "John", age: 31, city: "NYC", country: "USA"}