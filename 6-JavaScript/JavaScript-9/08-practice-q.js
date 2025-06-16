// Practice Questions - DOM Manipulation with JavaScript

// QUESTION 1: Create a <p> with red text that says "Hey I'm red! (class .red given)"
let para1 = document.createElement("p");
para1.innerText = "Hey I am red!";
document.querySelector("body").append(para1);
para1.classList.add("red");


// QUESTION 2: Create an <h3> with blue text that says "I'm a blue h3! (class .blue given)"
// YOUR CODE HERE
let heading3 = document.createElement("h3");
heading3.innerText = "I'm a blue h3";
document.querySelector("body").append(heading3);
heading3.classList.add("blue");


// QUESTION 3: Create a <div> with black border and pink background with nested elements:
// - an <h1> that says "I'm in a div"
// - a <p> that says "ME TOO!"
// YOUR CODE HERE
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para = document.createElement("p");

h1.innerText = "I'm in a div";
para.innerHTML = "Me too!";

div.append(h1);
div.append(para);

// Style the div: Add CSS class 'div-style' (black border, pink background)
// Create this class in your CSS file: .div-style { border: 2px solid black; background-color: pink; }
div.classList.add("div-style");
document.querySelector("body").append(div);
