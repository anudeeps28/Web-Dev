// JS (Part 9) Practice Questions - DOM Manipulation with JavaScript

// Qs1. Create a new input and button element on the page using JavaScript only. 
// Set the text of button to "Click me";
// YOUR CODE HERE
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerHTML = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(btn);


// Qs2. Add following attributes to the element:
// - Change placeholder value of input to "username"
// - Change the id of button to "btn"
// YOUR CODE HERE
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");


// Qs3. Access the btn using the querySelector and button id. 
// Change the button background color to blue and text color to white.
// YOUR CODE HERE
let foundBtn = document.querySelector("#btn");
foundBtn.style.backgroundColor = "blue";
foundBtn.style.color = "white";
// alternative way - make a class called "style-class" with these properties and use foundBtn.classList.add("style-class")


// Qs4. Create an h1 element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
// YOUR CODE HERE
let h1 = document.createElement("h1");
h1.innerHTML = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";
document.querySelector("body").append(h1);



// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.
// YOUR CODE HERE
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
