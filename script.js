var score = 0;
var highScore = localStorage.getItem("highScore");

if(highScore !== null){
    if (score > highScore) {
        localStorage.setItem("highScore", score);
    }
}
else {
    localStorage.setItem("highScore", score);
}
