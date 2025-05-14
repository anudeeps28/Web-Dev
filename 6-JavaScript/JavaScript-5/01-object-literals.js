// key - value pair
const student = { 
    name: "anudeep",
    age: 27,
    marks: 90,
    city: "Delhi"
};

/**
 * We can use array to store this information too, but
 * clarity of what values are in the data structures is more in objects
 */

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"] // we can store arrays in an object 
};

// create a post on twitter/instagram which has some properties
const post = {
    username: "@anudeepsharma",
    content: "This is my first #post",
    likes: 150,
    reposts: 5,
    tags: ["apnacollege", "delta"]
};

// get values from an object
post["content"]; // This is my first #post
post.content; // This is my first #post
post.likes; // 150

let property = "reposts";
post[property]; // 5

// conversion in getting values -> js automatically converts object keys to strings
const obj = {
    1: "a",
    2: "b",
    true: "c", // true has been converted to a string here
    null: "d", // null has been converted to a string here
    undefined: "e" // undefined has been converted to a string here
};

obj[1]; // a
obj[null]; // d

// add/update value
console.log(student);
student.city = "Mumbai";
console.log(student);
student.gender = "male";
console.log(student);
student.marks = "A";
console.log(student);
student.marks = [99,89,74];
console.log(student);
delete student.city;
console.log(student);

// object of objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
};

console.log(classInfo.shradha.city); // Pune
classInfo.shradha.city = "Gurugram";
console.log(classInfo.shradha.city); // Gurugram

// array of objects
const classInfo2 = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "shradha",
        grade: "A",
        city: "Pune"
    },
    {
        name: "karan",
        grade: "O",
        city: "Mumbai"
    },
]

console.log(classInfo2);
console.log(classInfo2[1].name); // shradha
classInfo2[1].gender = "female";
console.log(classInfo2[1]);