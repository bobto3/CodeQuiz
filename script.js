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

var questionBank = [
    {
    question:"What does HTML stand for?",
    possibleAnswers: ["Hyphen Top Markup Label", "Hyper Text Markup Language", "Holy Traveler Makeshift Language", "Hold That Makeup Left"],
    correctAnswer: "Hyper Text Markup Language",
},
{
    question:"What is CSS used for?",
    possibleAnswers: ["Page Content", "Page Structure", "Page Styling", "Page Logic"],
    correctAnswer: "Page Styling",
},
{
    question:"What is the third question?",
    possibleAnswers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: "Answer C",
}, 
{
    question:"What is the forth question?",
    possibleAnswers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: "Answer D",
}]

function startGame() {
    questionCardEl.style.display = "flex";
    welcomeScreenEl.style.display = "none";
    containerEl.style.display = "none";
    askQuestion();
    
}

var questionIndex = 0;

function askQuestion() {
    questionEl.textContent = questionBank[questionIndex].question;
    answerAEl.textContent = questionBank[questionIndex].possibleAnswers[0];
    answerBEl.textContent = questionBank[questionIndex].possibleAnswers[1];
    answerCEl.textContent = questionBank[questionIndex].possibleAnswers[2];
    answerDEl.textContent = questionBank[questionIndex].possibleAnswers[3];
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
    questionIndex++;

    if (questionIndex > questionBank.length-1){
        containerEl.style.display = "inline-block";
        questionCardEl.style.display = "none";
        welcomeScreenEl.style.display = "block";
        var response = prompt("Enter Your Name To Save Your Score");
        questionIndex = 0;
        // var node = document.createElement('li');
        // node.appendChild(document.createTextNode(response));
        // document.highScoreListEl.appendChild(node);
    } else {
        askQuestion();
    }
});

answerBEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (answerBEl === questionBank.correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
    }
    questionIndex++;

    if (questionIndex > questionBank.length-1){
        containerEl.style.display = "inline-block";
        questionCardEl.style.display = "none";
        welcomeScreenEl.style.display = "block";
    } else {
        askQuestion();
    }
});

answerCEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (answerCEl === questionBank.correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
    }
    questionIndex++;

    if (questionIndex > questionBank.length-1){
        containerEl.style.display = "inline-block";
        questionCardEl.style.display = "none";
        welcomeScreenEl.style.display = "block";
    } else {
        askQuestion();
    }
});

answerDEl.addEventListener("click", function(){
    rightOrWrongEl.style.display = "block";
    if (answerDEl === questionBank.correctAnswer) {
        rightOrWrongEl.textContent = "Correct!";
    } else {
        rightOrWrongEl.textContent = "Sorry, wrong answer";
    }
    questionIndex++;

    if (questionIndex > questionBank.length-1){
        containerEl.style.display = "inline-block";
        questionCardEl.style.display = "none";
        welcomeScreenEl.style.display = "block";
    } else {
        askQuestion();
    }
});


var startTime = 59;

function startTimer() {
    var timerInterval = setInterval(function() {
        timerScoreEl.textContent = "Time: " + startTime + " seconds left";
        startTime--;

        if(startTime < 0) {
            // Stops timer at 0 and displays Times Up! message
            clearInterval(timerInterval);
            timerScoreEl.textContent = "Time's Up!"
            endGame();
        }
    }, 1000);
}

function endGame() {
    if (timerScoreEl.textContent = "Time's Up!") {
        var response = prompt("Enter Your Name To Save Your Score");
        console.log(response);
        containerEl.style.display = "inline-block";
        questionCardEl.style.display = "none";
        welcomeScreenEl.style.display = "flex";
    }

    // if (questionIndex > questionBank.length){
    //     containerEl.style.display = "inline-block";
    //     questionCardEl.style.display = "none";
    //     welcomeScreenEl.style.display = "block";
    // }
}

startGameButtonEl.addEventListener("click", function() {
    startGame();
    startTimer();
    console.log("start game");
})

//turns high scoreboard on
highScoresEl.addEventListener("click", function(){
    containerEl.style.display = "inline-block";
})

//closes high scoreboard
closeWindowEl.addEventListener("click", function(){
    containerEl.style.display = "none";
})