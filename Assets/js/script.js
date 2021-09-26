console.log("test");

var questionCard = document.querySelector(".quiz-questions"); 
var startPage = document.querySelector(".start-page");
var resultsPage = document.querySelector("#results-page")
var question = document.querySelector("#question");
var answerButtons = document.querySelectorAll("#one, #two, #three, #four");
var answer1 = document.querySelector("#one");
var answer2 = document.querySelector("#two");
var answer3 = document.querySelector("#three");
var answer4 = document.querySelector("#four");
var result = document.querySelector("#result1");
var startButton = document.querySelectorAll("#start");
var timerElement = document.querySelector("#timer");
var scoreTally = 0;
var scoreTotal = 0;
var scoreDisplay = document.querySelector("#score-display");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var A = document.querySelector("#A");
var goBackButton = document.querySelector("#go-back");

var timer;
var timerCount;

// declaring question and answer string variable using arrays
var questionArray = ["What does HTML stand for?", "What does CSS stand for?", "What is the cloud?", "What is a repository?", "What is reponsive design?"];
var A1 = ["1. Hyper Trainer Marking Language", "1. Cascade Standing Sheet", "Water vapour", "A suppository", "A design that talks to you"];
var A2 = ["2. Hyper Text Marketing Language", "2. Computer Styling Sheet", "Remote online storage", "An online library of code", "An emotionally connected computer program"];
var A3 = ["3. Hyper Text Markup Language", "3. Cascade Super Styling", "The land of the gods", "A dictionary", "An application that adjusts to screen size"];
var A4 = ["4. Hyper Text Markup Leveler", "4. Cascade Styling Sheet", "Local storage", "A super computer", "A website that responds to events"];

// correct answers = A3[0], A4[1]

console.log(startButton);
console.log(answerButtons);
console.log(A1);
console.log(A);


// adding event listener to start button, initiating 1st question, starting time
startButton[0].addEventListener("click", function(event){
        event.preventDefault;
        questionCard.style.display = "flex";
        startPage.style.display = "none";
        resultsPage.style.display = "none";
        timerCount = 30;
        startTimer();
        quizSetUp();
});

// function for setting time and counting down until 0 seconds, then high scores page is called
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
        clearInterval(timer);
        // display final score
        // bring up resultsPage when time hits 0
        questionCard.style.display = "none";
        resultsPage.style.display = "flex";
        scoreDisplay.textContent = "Your final score is " + scoreTally;
        console.log(initials.textContent);
        }
    }, 1000);
}

// setting quiz questions and answers using arrays
function quizSetUp() {
    for (i = 0; i < questionArray.length; i++) {
    question.textContent = questionArray[i];
    answer1.textContent = A1[i];
    answer2.textContent = A2[i];
    answer3.textContent = A3[i];
    answer4.textContent = A4[i];
    return;
}}

// moving question and answers to next set
x = 0;
function quizProgression() {
    question.textContent = questionArray[x];
    answer1.textContent = A1[x];
    answer2.textContent = A2[x];
    answer3.textContent = A3[x];
    answer4.textContent = A4[x];
    return;
}

for (i = 0; i < answerButtons.length; i++) { 
        answerButtons[i].addEventListener("click", function(){
        function answer(event) {
            console.log(event.target.textContent);
            // if correct; correct statement shown, +1 to score tally, quiz progression
            if (event.target.textContent === A3[0] || event.target.textContent === A4[1] || event.target.textContent === A2[2] || event.target.textContent === A2[3] || event.target.textContent === A3[4]) {
                result.textContent = "Correct";
                scoreTally++;
                console.log(scoreTally);
                x++;
                console.log(x);
                quizProgression();
                // if wrong answer; incorrect statement, quiz progression, timer loses 10 seconds
            } else {
                result.textContent = "Incorrect";
                console.log(scoreTally);
                x++;
                console.log(x);
                quizProgression();
                timerCount -= 10;
            }
        }
        answer(event);
    
    });
};


// saving score to local storage
function saveScore() {
    var highscore = {
        highscore: scoreTally,
        initials: initials.value,
        };
    console.log(highscore)
    localStorage.setItem("score", JSON.stringify(highscore));    
}

// retriving HS from local storage
function renderHighScore() {
    var lastHighScore = JSON.parse(localStorage.getItem("score"))
    if (lastHighScore !== null) {
        A.value = lastHighScore;
    } else  {
        return;
    }
}

// open scores page and render results
function openHighscores() {
    window.location = "highscores.html";
    event.preventDefault();
    renderHighScore();
}

// event listner for submit high score, adding to local storage
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveScore(); 
    openHighscores();
})

// function to return to quiz
function goBack() {
    window.location = "index.html";
}

// event listner for goback button
goBackButton.addEventListener("click", function(event) {
    event.preventDefault;
    goBack();
})