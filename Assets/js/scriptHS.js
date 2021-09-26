console.log("test");

var highScoreList = document.querySelector("#highscore-list");
var highScoreCount = document.querySelector("#highscore-count");
var goBackButton = document.querySelector("#go-back");

var hs = [""];

// calling init function and renderhighscore function on webpage loading
init();

// rending high scores by appending li in the highscore list, using getitem under init function set obtain values


function init() {
    var score = JSON.parse(localStorage.getItem("score"));
    console.log(score);

    if (score !== null) {
        renderHighScore();
    };

    function renderHighScore() {

        var li = document.createElement("li");
        console.log(score.highscore);
        console.log(score.initials);
        li.textContent = "Player: " + score.initials + ", Score: " + score.highscore;
        highScoreCount.textContent = "1"
        li.setAttribute("data-index", 0);

        highScoreList.appendChild(li);
    };

};

// function to return to quiz
function goBack() {
    window.location = "index.html";
}

// event listner for goback button
goBackButton.addEventListener("click", function(event) {
    event.preventDefault;
    goBack();
})