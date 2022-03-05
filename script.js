var questionEl = document.querySelector("#question");
var answerAEl = document.querySelector("#answerA");
var answerBEl = document.querySelector("#answerB");
var answerCEl = document.querySelector("#answerC");
var answerDEl = document.querySelector("#answerD");
var questionBankEl = document.querySelector("#questionBank");
var questionCardEl = document.querySelector("#questionCard");
var startGameButtonEl = document.querySelector("#startGameButton");
var welcomeScreenEl = document.querySelector("#welcomeScreen")
var timerScoreEl = document.querySelector("#timerScore");
var rightOrWrongEl = document.querySelector("#rightOrWrong");

var questionIndex = 0;
//questionBank[questionIndex].question;

var questionBank = [
    {
    question:"What does HTML stand for?",
    possibleAnswers: ["Hyphen Top Markup Label", "Hyper Text Markup Language", "Holy Traveler Makeshift Language", "Hold That Makeup Left"],
    correctAnswer: "Hyper Text Markup Language",
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
    question1();
    
}

function question1() {
    questionEl.textContent = questionBank[0].question;
    answerAEl.textContent = questionBank[0].possibleAnswers[0];
    answerBEl.textContent = questionBank[0].possibleAnswers[1];
    answerCEl.textContent = questionBank[0].possibleAnswers[2];
    answerDEl.textContent = questionBank[0].possibleAnswers[3];
}

answerAEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (answerAEl === questionBank.correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
        startTime = startTime + 10;
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
        startTime = startTime - 10;
    }
});

answerBEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (answerBEl === questionBank.correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
    }
});

answerCEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (answerCEl === questionBank.correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
    }
});

answerDEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (answerDEl === questionBank.correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
    }
});

var startTime = 59;

function startTimer() {
    var timerInterval = setInterval(function() {
        timerScoreEl.textContent = "Time: " + startTime + " seconds left";
        startTime--;

        if(startTime === -2) {
            // Stops timer at 0 and displays Times Up! message
            clearInterval(timerInterval);
            timerScoreEl.textContent = "Times Up!"
        }
    }, 1000);
}

startGameButtonEl.addEventListener("click", function() {
    startGame();
    startTimer();
    console.log("start game");
})
