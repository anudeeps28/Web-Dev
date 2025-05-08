// 1. Trim Method
let msg = "     he  llo    "
console.log(msg.trim());

let password = "   abd   "
console.log(password.trim())
console.log(password); // original string remains the same => strings are immutable in js

// 2. ToUpperCase and ToLowerCase
let randomString = "Anudeep Sharma";
console.log(randomString.toLowerCase());
console.log(randomString.toUpperCase());

// 3. indexOf
let randomString2 = "ILoveCoding";
console.log(randomString2.indexOf("love")); // -1
console.log(randomString2.indexOf("Love")); // 1
console.log(randomString2.indexOf("j")); // -1
console.log(randomString2.indexOf("o")); // only 2

// 4. method chaining
let randomString3 = "    hello    "
console.log(randomString3.trim().toUpperCase()); 

// 5. slice method
let randomString4 = "IloveCoding";
console.log(randomString4.slice(1,5)); // (start, end+1) 
console.log(randomString4.slice(5)); // (index -> end of string)
console.log(randomString4.slice(-2)) // (index = length - index) => 11-2 = 9

// 6. Replace method
let randomString5 = "IloveCoding";
console.log(randomString5.replace("love", "do")); // IdoCoding
console.log(randomString5.replace("o", "x")); // IlxveCoding (just the first occurance changes)
console.log(randomString5.replace("o", "x").replace("o", "x")); // IlxveCxding (just the first occurance changes)

// 7. Repeat method
let randomString6 = "mango";
console.log(randomString6.repeat(3));

// Practice
let msg2 = "help!";
console.log(msg2.trim().toUpperCase());
let name2 = "ApnaCollege";
console.log(name2.slice(4,9));
console.log(name2.indexOf("na"));
console.log(name2.replace("Apna", "Our"));
console.log(name2.replace("l", "t").replace("l", "t"));
