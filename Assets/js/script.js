console.log("test");

// to hide/show quiz cards. document.getElementById("Q1").style.display = "none";

var questionCard = document.querySelector(".quiz-questions"); 
var startPage = document.querySelector(".start-page");
var resultsPage = document.querySelector("#results-page")
var question = document.querySelector("question");
var answer1 = document.querySelector("#one");
var answer2 = document.querySelector("#two");
var answer3 = document.querySelector("#three");
var answer4 = document.querySelector("#four");
var result = document.querySelector("#result1");
var startButton = document.querySelectorAll("#start");
var timerElement = document.querySelector("#timer");
var scoreTally = 0;
var scoreTotal = 0;

var timer;
var timerCount;

console.log(startButton);

// adding event listener to start button, initiating 1st question, starting time
startButton[0].addEventListener("click", function(){
        questionCard.style.display = "flex";
        startPage.style.display = "none";
        resultsPage.style.display = "none";
        timerCount = 60;
        startTimer();
});

// function for setting time and counting down until 0 seconds, then high scores page is called
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
        clearInterval(timer);
        // tally score
        // bring up resultsPage
        }
    }, 1000);
    
}