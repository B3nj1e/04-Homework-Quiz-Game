console.log("test");

var highScoreList = document.querySelector("#highscore-list");
var highScoreCount = document.querySelector("#highscore-count");
var goBackButton = document.querySelector("#go-back");

var hs = [];

// rending high scores by appending li in the highscore list, using getitem under init function set obtain values
function renderHighScore() {
    highScoreCount.textContent = highScoreList.length;

    for (var i = 0; i < hs.length; i++) {
        var highscore = hs[i];

        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", i);

        highScoreList.appendChild(li);
    }
};

function init() {
    var storedHS = JSON.parse(localStorage.getItem("score"));
    console.log(storedHS);

    if (storedHS !== null) {
        hs = storedHS;
    };
    renderHighScore();
};

// calling init function and renderhighscore function on webpage loading
init();

// function to return to quiz
function goBack() {
    window.location = "index.html";
}

// event listner for goback button
goBackButton.addEventListener("click", function(event) {
    event.preventDefault;
    goBack();
})