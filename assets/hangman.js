// an array of words
const teamBank = ['falcons', 'bears', 'broncos', 'bills', 'panthers', 'cardinals', 'lions', 'dolphins',
 'eagles', 'rams', 'seahawks', 'ravens', 'bengals', 'jaguars'];
// line below chooses a word at random from above array
var randomNum = Math.floor(Math.random() * teamBank.length);
var choosenWord = teamBank[randomNum];
    console.log(choosenWord);
var underScore = [];
var lettersGuessed = [];
var rightWord = [];
var wrongWord = [];
var wins = 0;
var maxAttempts = 10;
var domUnderScores = document.getElementById('guessedLetters');


// var generateUnderscore = () => {
//     for(var i = 0; i < choosenWord.length; i++) {
//         underScore.push('_');
//     }
//     console.log(underScore);
//     return underScore;
// // function above is generating random length of underscores based of the words length in the array
// }
// generateUnderscore();
// //line above is to make sure to call the function that way we can show 

function reset() {
    wins = 0;
    attemptsLeft = maxAttempts;
    lettersGuessed = [];
    underScores = '';
    var generateUnderscore = () => {
        for(var i = 0; i < choosenWord.length; i++) {
            underScore.push('_');
            domUnderScores[0].innerHtml = generateUnderscore().join(' ');
        }
        console.log(underScore);
        return underScore;
// function above is generating random length of underscores based of the words length in the array
    }
    generateUnderscore();
//line above is to make sure to call the function that way the reset can happen 
 

document.addEventListener('keypress', (event) => {
    console.log(event);
//line above is adding a click event when the user guesses a letter
    var keyword = String.fromCharCode(event.keyCode);
//line above is showing which key character the user choose & new var keyword captures the info
    console.log(keyword);

    if(choosenWord.indexOf(keyword) > -1) {
//line above determines if users guess is right
        console.log(true);

    rightWord.push(keyword);
    underScore[choosenWord.indexOf(keyword)] = keyword;
//line above is repalcing the underscore with the correct letter user guessed
      console.log(underScore);
        console.log(rightWord);
     
    if(underScore.join('') == choosenWord) {
        alert('You Win!');
        wins++;
        reset(); 
    }
}
//if statement above checks to see is users word matches the random word, then alerts user they won

    else{
        wrongWord.push(keyword);
        console.log(wrongWord); 
        alert('You Lose!');
        reset();
      }
//lines above with .push are showing if user is choosing the right letter or wrong letter
    
    })

domUnderScores[0].innerHtml = generateUnderscore().join(' ');

};
   reset();




// // if(event.keycode >= 65 && event.keycode <= 90);


// // function updateDisplay() {
// //  document.getElementById("totalWins").innerHTML = wins;
// //  document.getElementById("currentWord").innerHTML = "";
// //  for (var i = 0; i < teamGuessed.length;i++)
// //  document.getElementById("totalWins").innerHTML = wins;


