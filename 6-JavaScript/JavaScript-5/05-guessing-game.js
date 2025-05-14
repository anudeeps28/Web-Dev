// the user enters a max and then keeps on guessing random number between 1 to max
let max = prompt("Enter the maximum number");
const random = Math.floor(Math.random() * max) + 1
console.log(random);

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    } else if (guess == random) {
        console.log("You are right - congratulations! The random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("Your guess was too small - please try again");
    } else {
        guess = prompt("Your guess was too big - please try again");
    }
}