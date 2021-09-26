console.log("test");



function renderHighScore() {
    var lastHighScore = JSON.parse(localStorage.getItem("highscore"))
    if (lastHighScore !== null) {
        document.getElementById("#A").textContent = lastHighScore
    } else  {
        return;
    }
}

renderHighScore();