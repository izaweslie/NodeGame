var Letter = require('./alphabet.js');

//Word Constructor
var Word = function(){
	this.wordToGuess = '';
	this.userGuess = [];
	this.getNewWord = function(){
		this.wordToGuess = 'guava'
	};
	this.incorrectGuess = function(letter){
		//Determines if the letter has already been guessed.
		if (this.userGuess.indexOf(letter.toUpperCase()) === -1 && this.userGuess.indexOf(letter.toLowerCase()) === -1 ){
			//Adds the guessed letter to the userGuess array.
			this.userGuess.push(letter);
			//Decreases the remainingGuesses for incorrect guess.
			if (this.wordToGuess.indexOf(letter.toUpperCase()) === -1 && this.wordToGuess.indexOf(letter.toLowerCase()) === -1 ){
				return true;
			} else {
				return false;
			}		
		} else {
			console.log('You already guessed that letter');
		}
	}
	this.display = function(){
		var wordSoFar = '';
		for (var i=0; i < this.wordToGuess.length; i++){	
			var letter = new Letter(this.wordToGuess[i]);
			wordSoFar += letter.display(this.userGuess)
		};
		return wordSoFar;
	};
};

//Export Word Module
module.exports = Word;
