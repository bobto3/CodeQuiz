var questionEl = document.querySelector("#question");
var questionBankEl = document.querySelector("#questionBank");
var questionCardEl = document.querySelector("#questionCard");
var startGameButtonEl = document.querySelector("#startGameButton");
var welcomeScreenEl = document.querySelector("#welcomeScreen")
var timerScoreEl = document.querySelector("#timerScore");

var questionIndex = 0;
//questionBank[questionIndex].question;

var questionBank = [
    {
    question:"What is the first question?",
    possibleAnswers: ["A", "B", "C", "D"],
    correctAnswer: "A",
},
{
    question:"What is the second question?",
    possibleAnswers: ["A", "B", "C", "D"],
    correctAnswer: "B",
},
{
    question:"What is the third question?",
    possibleAnswers: ["A", "B", "C", "D"],
    correctAnswer: "C",
}, 
{
    question:"What is the forth question?",
    possibleAnswers: ["A", "B", "C", "D"],
    correctAnswer: "D",
}]

function startGame() {
    questionCardEl.style.display = "flex";
    welcomeScreenEl.style.display = "none";

}

var startTime = 5;

function startTimer() {
    var timerInterval = setInterval(function() {
        timerScoreEl.textContent = "Time: " + startTime + " seconds left";
        startTime--;

        if(startTime === -1) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
}

startGameButtonEl.addEventListener("click", function() {
    startGame();
    startTimer();
    console.log("start game");
})
