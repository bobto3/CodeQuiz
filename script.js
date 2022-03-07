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

//question bank object
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

//displays questions and hides welcome screen after the start button is pressed
function startGame() {
    questionCardEl.style.display = "flex";
    welcomeScreenEl.style.display = "none";
    containerEl.style.display = "none";
    askQuestion();
}

//start button
startGameButtonEl.addEventListener("click", function() {
    startGame();
    startTimer();
    console.log("start game");
})

//timer
var timerInterval;
var startTime = 59;
function startTimer() {
    startTime = 59;
    timerInterval = setInterval(function() {
        timerScoreEl.textContent = "Time/ Score: " + startTime + " seconds left";
        startTime--;

        if(startTime < 0) {
            // Stops timer at 0 and displays "Game Over" message
            clearInterval(timerInterval);
            timerScoreEl.textContent = "Game Over";
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

//displays Correct or Incorrect message after the question is answered
function rightWrongTextTimeout (answerStatus) {
    if (answerStatus === "correct") {
            rightOrWrongEl.textContent = "Correct! +10";
            startTime = startTime + 10;
            questionIndex++;
        setTimeout(() => {
            rightOrWrongEl.textContent = "";
        }, 1000);
        
    } else {
            rightOrWrongEl.textContent = "Sorry, wrong answer. -15";
            startTime = startTime - 15;
            questionIndex++;
        setTimeout(() => {
            rightOrWrongEl.textContent = "";
        }, 1000);
    }
}

//button A
answerAEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[0] === questionBank[questionIndex].correctAnswer) {
        rightWrongTextTimeout("correct");
    } else {
        rightWrongTextTimeout("incorrect");
    }

    questionsDone();
});

//button B
answerBEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[1] === questionBank[questionIndex].correctAnswer) {
        rightWrongTextTimeout("correct");
    } else {
        rightWrongTextTimeout("incorrect");
    }

    questionsDone();
});

//button C
answerCEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[2] === questionBank[questionIndex].correctAnswer) {
        rightWrongTextTimeout("correct");
    } else {
        rightWrongTextTimeout("incorrect");
    }

    questionsDone();
});

//button D
answerDEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (questionBank[questionIndex].possibleAnswers[3] === questionBank[questionIndex].correctAnswer) {
        rightWrongTextTimeout("correct");
    } else {
        rightWrongTextTimeout("incorrect");
    }

    questionsDone();
});

//calls end of game functions after all the questions have been answered
function questionsDone() {
    if (questionIndex > questionBank.length-1){
        endGame();
        listScore();
        endClock();
    } else {
        askQuestion();
    }
}

//hides question block and displays welcome message after the game is finished
function endGame() {
    setTimeout(() => {
    containerEl.style.display = "inline-block";
    questionCardEl.style.display = "none";
    welcomeScreenEl.style.display = "block";
    questionIndex = 0;
    rightOrWrongEl.textContent = "";
    }, 500);
}

//records high score at the end of the game
function listScore() {
    var score = timerScoreEl.textContent = startTime;
    var newFinishedPlayer = document.createElement("li");
    
    setTimeout(() => {
        var response = prompt("Your Score: " + score + "\nEnter Your Name To Save Your Score");
        newFinishedPlayer.textContent = response + ": " + score;
        if (response) {
            highScoreListEl.appendChild(newFinishedPlayer);
        } else {
            return;
        }
    }, 1000); 
}

//stops clock and displays Game Over message
function endClock() {
    clearInterval(timerInterval);
    timerScoreEl.textContent = "Game Over";
}

//turns high scoreboard on
highScoresEl.addEventListener("click", function(){
    containerEl.style.display = "inline-block";
})

//closes high scoreboard
closeWindowEl.addEventListener("click", function(){
    containerEl.style.display = "none";
})