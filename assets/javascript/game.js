var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuessTally = [];
var gameLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(userGuessTally);
console.log(gameLetter);

document.getElementById('numWins').innerHTML = "Wins: " + wins;
document.getElementById('numLosses').innerHTML = "Losses: " + losses; 
document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft; 
document.getElementById('userGuesses').innerHTML = "Your Guesses So Far: " + userGuessTally; 


document.onkeypress = function(event) {
	var userGuess = event.key;

	if(userGuess === gameLetter) {
		alert("You win!");
		wins++;
		guessesLeft = 9;
		userGuessTally.length = 0;
		gameLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		document.getElementById('numWins').innerHTML = "Wins: " + wins;
		document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft; 
		document.getElementById('userGuesses').innerHTML = "Your Guesses So Far: " + userGuessTally;
	} 

	else {
		guessesLeft--;
		document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft; 

		if(guessesLeft == 0) {
			losses++;
			alert("Try again");
			guessesLeft = 9;
			userGuessTally.length = 0;
			gameLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			document.getElementById('numLosses').innerHTML = "Losses: " + losses; 
			document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft; 
			document.getElementById('userGuesses').innerHTML = "Your Guesses So Far: " + userGuessTally; 
		} 

		else {
			userGuessTally.push(" " + userGuess);
			document.getElementById('userGuesses').innerHTML = "Your Guesses So Far: " + userGuessTally;
		};
	};
}