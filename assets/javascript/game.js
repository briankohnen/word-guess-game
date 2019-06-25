// Wins / Stats
var wins = 0;
var guessLeft = 6;

// Variables to point to .html text
var currentWordText = document.getElementById("currentWord");
var userWinsText = document.getElementById("userWins");
var guessLeftText = document.getElementById("guessLeft");
var lettersGuessedText = document.getElementById("lettersGuessed");

// Show Wins / guessLeft on .html
userWinsText.textContent = wins;
guessLeftText.textContent = guessLeft;

// Creating an array to store user's guessed letters
var allLettersGuessed = [];

// Declare Array containing possible words to guess
var allWords = ["span", "div", "getelementbyid", "function", "method", "object",
                "document", "textcontent"];

// Choose a word from allWords at random and store in randomWord
var randomWord = allWords[Math.floor(Math.random() * allWords.length)];
console.log(randomWord);

// Creating an array to store _ an equal number of times to randomWord.length
// and display the _ 's on .html
var randomWordLetterArray = [];

for (var i = 0; i < randomWord.length; i++) {
   randomWordLetterArray.push("_ ");
}

currentWordText.textContent = randomWordLetterArray;

// Key press function
document.onkeyup = function(event) {

// set userGuess to key pressed and lower case
var userGuess = event.key.toLowerCase();

// conditional statement of whether to run game (guessLeft > 0)        
    if (guessLeft > 0) {

// if userGuess matches any character of randomWord, continue        
        if (randomWord.match(userGuess)) {

// create var whereLetterIs to store index location of where userGuess matches
            var whereLetterIs = randomWord.search(userGuess);
            console.log(whereLetterIs);

// use splice method to place userGuess at location in whereLetterIs, and remove previous _
            randomWordLetterArray.splice(whereLetterIs, 1, userGuess);

// display on .html and log to console
            currentWordText.textContent = randomWordLetterArray;
            console.log(randomWordLetterArray);

            //if (randomWordLetterArray.

        } else {

// checks allLettersGuessed for repeat guesses to not include twice
// if incorrect guess, push guess into allLettersGuessed, and decrement guessLeft   
            if (allLettersGuessed.includes(userGuess)) { 
                return;        
            } else {
            allLettersGuessed.push(userGuess);
            lettersGuessedText.textContent = allLettersGuessed;                
            guessLeft--;
            guessLeftText.textContent = guessLeft;
            }
        }
    }

    else {
        lettersGuessedText.textContent = "LOSER";
    }
}

var str = "Visit W3Schools!";
var n = str.search("3");
console.log(n);