//Create a sacret number
var secretNumber = 4;

//Ask user for guess
var guess = prompt("Guess a number");
var guessedNumber = Number(guess);

//Check the guessed number
if (guessedNumber === secretNumber) {
	alert("Correct!");
} else if (guessedNumber > secretNumber) {
	alert("Too high!");
} else if (guessedNumber < sescretNumber) {
	alert("Too low!");
}