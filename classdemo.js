Game(){
	var word = require("/word.txt");
	this.word = word();
	this.remaining guesses = 10;
	this.guess(letter) {
		
	}
	this.update(){
		print out current status of the game (ie guesses left, what the word looks like, etc)
	}
	this.isGuessed(){
		
	};
	this.word.getNewWord();
};
module.exports = Game;