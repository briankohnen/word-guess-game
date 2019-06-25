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
   randomWordLetterArray.push(" _ ");
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

// use splice method to place userGuess at location in whereLetterIs, and remove previous _
            randomWordLetterArray.splice(whereLetterIs, 1, userGuess);

// display on .html and log to console
            currentWordText.textContent = randomWordLetterArray;

// conditional statement if randomWordLetterArray does not contain " _ " user wins
            if (randomWordLetterArray.includes(" _ ")) {
                return;
            } else {
                console.log("you win");
            }

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
// if ((randomWordLetterArray[0] === randomWord.charAt(0)) && (randomWordLetterArray[1] === randomWord.charAt(1)) && 
//             (randomWordLetterArray[2] === randomWord.charAt(2)) && (randomWordLetterArray[3] === randomWord.charAt(3)) && 
//             (randomWordLetterArray[4] === randomWord.charAt(4)) && (randomWordLetterArray[5] === randomWord.charAt(5)) && 
//             (randomWordLetterArray[6] === randomWord.charAt(6)) && (randomWordLetterArray[7] === randomWord.charAt(7)) &&
//             (randomWordLetterArray[8] === randomWord.charAt(8)) && (randomWordLetterArray[9] === randomWord.charAt(9)) && 
//             (randomWordLetterArray[10] === randomWord.charAt(10)) && (randomWordLetterArray[11] === randomWord.charAt(11)) && 
//             (randomWordLetterArray[12] === randomWord.charAt(12)) && (randomWordLetterArray[13] === randomWord.charAt(13)) && 
//             (randomWordLetterArray[14] === randomWord.charAt(14))) {
//                 console.log("win");
//             }
console.log(randomWordLetterArray[2]);
console.log(randomWord.charAt(2));

// for (var i = 0; i < randomWordLetterArray.length; i++) {
//     if (randomWordLetterArray.includes(randomWord.charAt(i))) {
//         console.log("win");
//     }
// }

//for (var i = 0; i < randomWord.length; i++) {
   // if ((randomWordLetterArray[i] === randomWord.charAt(i)) 
    //&& (randomWordLetterArray[1] === randomWord.charAt(1)) && 
    //(randomWordLetterArray[2] === randomWord.charAt(2))) {
   // console.log("win");

// if (randomWordLetterArray.includes(" _ ")) {
//     return;
// } else {
//     console.log("you win");
// }
