var Word = require('alphabet.js');

//Game Constructor
var Game = function(){
	this.word = new Word();
	this.guessesLeft = 10;
	this.setUpGame = function(){
		this.word.getNewWord();
	};
	this.guess = function(letter){
		var wrongLetter = this.word.wrongGuess(letter)
		//Runs the wrongGuess function on the Word.
		//If wrongLetter (true) decrease remaining guesses.
		if (wrongLetter) {
			this.guessesLeft--
		} else if (!wrongLetter){
			//Do nothing.
		} else {
			console.log(this.word.wrongGuess(letter))
		}
		console.log(this.word.guessedLetters)
		this.update();
	};
	this.update = function(){
		console.log(this.word.display());
	}
};

//Export Module
module.exports = Game;