// ================================
// THE 'this' KEYWORD - 4 KEY CONTEXTS
// ================================

console.log("=== 1. Object Methods ===");
// 'this' refers to the object that owns the method

const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
        console.log("'this' refers to:", this);
    }
};

person.greet(); // 'this' = person object

console.log("\n=== 2. Regular Functions ===");
// 'this' refers to global object (window in browser, global in Node.js)

function regularFunction() {
    console.log("In regular function, 'this' refers to:", this);
    // In browser: Window object
    // In Node.js: global object
}

regularFunction();

console.log("\n=== 3. Arrow Functions ===");
// 'this' is inherited from surrounding scope (lexical this)

const obj = {
    name: "Alice",
    
    // Regular method
    regularMethod: function() {
        console.log("Regular method - this.name:", this.name); // Alice
        
        // Arrow function inside method
        const arrowFunction = () => {
            console.log("Arrow function - this.name:", this.name); // Alice (inherited from regularMethod)
        };
        
        arrowFunction();
    },
    
    // Arrow method (not recommended for object methods)
    arrowMethod: () => {
        console.log("Arrow method - this.name:", this.name); // undefined (inherits from global scope)
    }
};

obj.regularMethod();
obj.arrowMethod();

console.log("\n=== 4. Event Handlers (Simulated) ===");
// In real DOM, 'this' would refer to the element that triggered the event

// Simulating button click handler
function simulateButtonClick() {
    const button = {
        id: "myButton",
        text: "Click Me",
        
        // Regular function as event handler
        handleClick: function() {
            console.log("Button clicked! 'this' refers to:", this);
            console.log("Button ID:", this.id);
            console.log("Button text:", this.text);
        }
    };
    
    // Simulating click event
    button.handleClick(); // 'this' = button object
}

simulateButtonClick();

console.log("\n=== Comparison Summary ===");
console.log("1. Object methods: this = the object");
console.log("2. Regular functions: this = global object");
console.log("3. Arrow functions: this = inherited from parent scope");
console.log("4. Event handlers: this = the element that fired the event");