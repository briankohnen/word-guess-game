// Wins / Stats
var wins = 0;
var guessLeft = 6;

// Variables to point to .html
var currentWordText = document.getElementById("currentWord");
var userWinsText = document.getElementById("userWins");
var guessLeftText = document.getElementById("guessLeft");
var lettersGuessedText = document.getElementById("lettersGuessed");

// Creating an array to store user's guessed letters
var allLettersGuessed = [];

// Show Wins / guessLeft on .html
userWinsText.textContent = wins;
guessLeftText.textContent = guessLeft;

// Declare Array containing possible words to guess
var allWords = ["span", "div", "getelementbyid", "function", "method", "object",
                "document", "textcontent"];

// Choose a word from allWords at random and store in randomWord
var randomWord = allWords[Math.floor(Math.random() * allWords.length)];
console.log(randomWord);

// Key press function
document.onkeyup = function(event) {

    var userGuess = event.key;

    if (randomWord.match(userGuess)) {

        currentWordText.textContent = userGuess;
    
    } else {

        allLettersGuessed.push(userGuess);
        lettersGuessedText.textContent = allLettersGuessed;
        guessLeft--;
        guessLeftText.textContent = guessLeft;
    }

    //currentWordText.textContent = randomWord;
}

//function testCharAt


