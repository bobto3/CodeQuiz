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
var highScoresEl = document.querySelector("#viewHighscores");
var scoreBoardEl = document.querySelector("#highScoresBoard");
var closeWindowEl = document.querySelector("#closeWindow");
var containerEl = document.querySelector("#container");
var highScoreListEl = document.querySelector("#highScoreList");

//questions
var questionBank = [
    {
    question:"What does HTML stand for?",
    possibleAnswers: ["Hyper Text Markup Language", "Hyphen Top Markup Label", "Holy Traveler Makeshift Language", "Hold That Makeup Left"],
    correctAnswer: "Hyper Text Markup Language",
},
{
    question:"What is CSS used for?",
    possibleAnswers: ["Page Content", "Page Structure", "Page Styling", "Page Logic"],
    correctAnswer: "Page Styling",
},
{
    question:"A Function Associated With An object is Called:",
    possibleAnswers: ["Function", "Method", "Link", "Array"],
    correctAnswer: "Method",
}, 
{
    question:"A JavaScript File Has An Extension of:",
    possibleAnswers: [".jss", ".javasc", ".js", ".script"],
    correctAnswer: ".js",
}]

//start button
startGameButtonEl.addEventListener("click", function() {
    startGame();
    startTimer();
    console.log("start game");
})

function startGame() {
    questionCardEl.style.display = "flex";
    welcomeScreenEl.style.display = "none";
    containerEl.style.display = "none";
    askQuestion();
}

//timer
var startTime = 59;
function startTimer() {
    startTime = 59;
    var timerInterval = setInterval(function() {
        timerScoreEl.textContent = "Time/ Score: " + startTime + " seconds left";
        startTime--;

        if(startTime < 0) {
            // Stops timer at 0 and displays Times Up! message
            clearInterval(timerInterval);
            timerScoreEl.textContent = "Game Over"
        }
    }, 1000);
}

//question structure
var questionIndex = 0;
function askQuestion() {
    questionEl.textContent = questionBank[questionIndex].question;
    answerAEl.textContent = questionBank[questionIndex].possibleAnswers[0];
    answerBEl.textContent = questionBank[questionIndex].possibleAnswers[1];
    answerCEl.textContent = questionBank[questionIndex].possibleAnswers[2];
    answerDEl.textContent = questionBank[questionIndex].possibleAnswers[3];
}

//button A
answerAEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[0] === questionBank[questionIndex].correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
        startTime = startTime + 10;
        questionIndex++;
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
        startTime = startTime - 15;
        questionIndex++;
    }

    if (questionIndex > questionBank.length-1){
        endGame();
        listScore();
        startTime = 0;
    } else {
        askQuestion();
    }
});

//button B
answerBEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[1] === questionBank[questionIndex].correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
        startTime = startTime + 10;
        questionIndex++;
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
        startTime = startTime - 15;
        questionIndex++;
    }

    if (questionIndex > questionBank.length-1){
        endGame();
        listScore();
        startTime = 0;
    } else {
        askQuestion();
    }
});

//button C
answerCEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[2] === questionBank[questionIndex].correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
        startTime = startTime + 10;
        questionIndex++;
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
        startTime = startTime - 15;
        questionIndex++;
    }

    if (questionIndex > questionBank.length-1){
        endGame();
        listScore();
        startTime = 0;
    } else {
        askQuestion();
    }
});

//button D
answerDEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[3] === questionBank[questionIndex].correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
        startTime = startTime + 10;
        questionIndex++;
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
        startTime = startTime - 15;
        questionIndex++;
    }
    

    if (questionIndex > questionBank.length-1){
        endGame();
        listScore();
        startTime = 0;
    } else {
        askQuestion();
    }
});

//records high score at the end of the game
function listScore() {
    var response = prompt("Enter Your Name To Save Your Score");  
    var score = timerScoreEl.textContent = startTime;
    var newFinishedPlayer = document.createElement("li");
    newFinishedPlayer.textContent = response + ": " + score;
    highScoreListEl.appendChild(newFinishedPlayer);
    console.log(response);
    console.log(score);
    console.log(newFinishedPlayer);
}

function endGame() {
    containerEl.style.display = "inline-block";
    questionCardEl.style.display = "none";
    welcomeScreenEl.style.display = "block";
    questionIndex = 0;
}

//turns high scoreboard on
highScoresEl.addEventListener("click", function(){
    containerEl.style.display = "inline-block";
})

//closes high scoreboard
closeWindowEl.addEventListener("click", function(){
    containerEl.style.display = "none";
})