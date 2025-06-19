// Qs1. Try out the following events in EventListener on your own:
// - mouseout
// - keypress  
// - scroll
// - load
// [Use MDN for help]
let btn = document.createElement('button');
btn.innerHTML = "click me";
document.body.append(btn);
btn.addEventListener('mouseout', function() {
    console.log("My mouse left a button");
});

document.addEventListener('keypress', function(event) {
    console.log(event.key);
});

window.addEventListener('scroll', function() {
    console.log("I scrolled");
});

window.addEventListener('load', function() {
    console.log("Page Loaded");
});

// Qs2. Create a button on the page using JavaScript. 
// Add an event listener to the button that changes the button's color to green when it is clicked.
let btn2 = document.createElement('button');
btn2.innerHTML = "Button";
document.body.append(btn2);
btn2.addEventListener('click', function() {
    btn2.style.backgroundColor = "green";
});


// Qs3. Create an input element on the page with a placeholder "enter your name" and an H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user's name so it should only input letters from a-z, A-Z and space 
// (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside the heading.
// [Please note that no other character apart from the allowed characters should be visible in the heading]
let input = document.createElement("input");
input.placeholder = "Enter your name";
let h2 = document.createElement("h2");
document.body.append(input);
document.body.append(h2);

input.addEventListener('input', function(event) {
    let letter = input.value;
    let result = "";
    for(let i=0; i<letter.length; i++) {
        if ( (letter[i] >= 'a' && letter[i] <= "z") ||
             (letter[i] >= 'A' && letter[i] <= 'Z') ||
             (letter[i] == " ") ) {
            result += letter[i];
        }
    }
    h2.textContent = result;
});
