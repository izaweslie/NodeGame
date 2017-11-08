//alphabet Constructor
var alphabet = function(letter){
	this.letter = letter;
	this.display = function(userguess){
		if (this.letter === ' '){
			return ' ';
		} else if( userguess.indexOf(this.letter.toLowerCase()) > -1 || userguess.indexOf(this.letter.toUpperCase()) > -1){
			return this.letter;
		} else {
			return '_';
		}
	}
}

//Export Module
module.exports = alphabet;