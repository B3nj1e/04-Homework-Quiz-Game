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

var timer;
var timerCount;

// declaring question and answer string variable using arrays
var questionArray = ["What does HTML stand for?", "What does CSS stand for?", "What is the cloud?"];
var A1 = ["1. Hyper Trainer Marking Language", "1. Cascade Standing Sheet", "Water vapour"];
var A2 = ["2. Hyper Text Marketing Language", "2. Computer Styling Sheet", "Remote online storage"];
var A3 = ["3. Hyper Text Markup Language", "3. Cascade Super Styling", "The land of the gods"];
var A4 = ["4. Hyper Text Markup Leveler", "4. Cascade Styling Sheet", "Local storage"];

// correct answers = A3[0], A4[1]

console.log(startButton);
console.log(answerButtons)
console.log(A1);

// adding event listener to start button, initiating 1st question, starting time
startButton[0].addEventListener("click", function(){
        questionCard.style.display = "flex";
        startPage.style.display = "none";
        resultsPage.style.display = "none";
        timerCount = 60;
        startTimer();
        quizSetUp();
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
            if (event.target.textContent === A3[0] || event.target.textContent === A4[1] || event.target.textContent === A2[2]) {
                result.textContent = "Correct";
                scoreTally++;
                console.log(scoreTally);
                x++;
                console.log(x);
                quizProgression();
            } else {
                result.textContent = "Incorrect";
                console.log(scoreTally);
                x++;
                console.log(x);
                quizProgression();
            }
        }
        answer(event);
    
    });
};