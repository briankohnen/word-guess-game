// Wins / Stats
var wins = 0;
var guessLeft = 8;


// Variables to point to .html text
var currentWordText = document.getElementById("currentWord");
var userWinsText = document.getElementById("userWins");
var guessLeftText = document.getElementById("guessLeft");
var lettersGuessedText = document.getElementById("lettersGuessed");

// Show Wins / guessLeft on .html
userWinsText.textContent = wins;
guessLeftText.textContent = guessLeft;

// Declare Array containing possible words to guess
var allWords = ["span", "div", "getelementbyid", "function", "method", "object",
                "document", "textcontent", "console", "log", "onkeyup", "event",
                "var", "while", "string", "boolean", "number", "array", "doctype",
                "html", "css", "javascript", "indexof", "push", "includes", "match",
                "tolowercase", "touppercase", "math", "random", "floor", "ceil", "splice"];

// Choose a word from allWords at random and store in randomWord
var randomWord = allWords[Math.floor(Math.random() * allWords.length)];
console.log(randomWord);


// Creating an array to store " _ " an equal number of times to randomWord.length
var randomWordLetterArray = [];
// push " _ " an equal number of times/randomWord.length to previous array
for (var i = 0; i < randomWord.length; i++) {
   randomWordLetterArray.push("_");
}
// and display the _ 's on .html
currentWordText.textContent = randomWordLetterArray.join(" ");

// Creating an array to store user's guessed letters
var allLettersGuessed = [];

// Key press function
document.onkeyup = function(event) {

// set userGuess to key pressed and lower case
var userGuess = event.key.toLowerCase();

// function to reset game on win/store user's guesses
function winReset() {
    wins++;
    userWinsText.textContent = wins;
        randomWord = allWords[Math.floor(Math.random() * allWords.length)];
        console.log(randomWord);
            randomWordLetterArray = [];
            for (var i = 0; i < randomWord.length; i++) {
                randomWordLetterArray.push("_");
                }
            currentWordText.textContent = randomWordLetterArray.join(" ");
                guessLeft = 8;
                guessLeftText.textContent = guessLeft;
                allLettersGuessed = [];
                lettersGuessedText.textContent = allLettersGuessed
            };
function pushUserGuess() {
               
    allLettersGuessed.push(userGuess);
        lettersGuessedText.textContent = allLettersGuessed.join(" ");              
            guessLeft--;
                guessLeftText.textContent = guessLeft;
            };


// conditional statement of whether to run game (guessLeft > 0)        
    if (guessLeft > 0) {

// if userGuess matches any character of randomWord, continue        
        if (randomWord.match(userGuess)) {


// define function to iterate through each letter of randomWord, if userGuess matches the letter, splice it into the _ array at the position of that letter
                function findAllLetters() {
                    for(var i = 0; i < randomWord.length; i++) {
                        if (randomWord[i] === userGuess) {
                            randomWordLetterArray.splice(i, 1, userGuess);
                        }
                    }
                }

            findAllLetters();

// display on .html and log to console
            currentWordText.textContent = randomWordLetterArray.join(" ");

// conditional statement if randomWordLetterArray does not contain " _ " user wins
            if (randomWordLetterArray.includes("_")) {
                return;
            } else {
                winReset();
            }

        } else {

// checks allLettersGuessed for repeat guesses to not include twice
// if incorrect guess, push guess into allLettersGuessed, and decrement guessLeft   
            if (allLettersGuessed.includes(userGuess)) { 
                return;        
            } else {
                pushUserGuess();
            }
        }
    }

    else {
        lettersGuessedText.textContent = "LOSER, refresh to start again!";
    }
}