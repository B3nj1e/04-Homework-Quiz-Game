console.log("test");

// to hide/show quiz cards. document.getElementById("Q1").style.display = "none";

var questionCard = document.querySelector(".quiz-questions"); 
var startPage = document.querySelector(".start-page");
var question = document.querySelector("question");
var answer1 = document.querySelector("#one");
var answer2 = document.querySelector("#two");
var answer3 = document.querySelector("#three");
var answer4 = document.querySelector("#four");
var result = document.querySelector("#result1");
var startButton = document.querySelectorAll("#start");
var scoreTally = 0;
var scoreTotal = 0;

var timer;
var timerCount;

console.log(startButton);

startButton[0].addEventListener("click", function(){
    if (questionCard.style.display === "none") {    
        questionCard.style.display = "flex";
        startPage.style.display = "none";
    } else {
        questionCard.style.display = "none";
        startPage.style.display = "flex";
    }
});
