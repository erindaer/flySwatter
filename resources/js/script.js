// Setting up canvas's height and width
var canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Grabbing our canvas
var c = canvas.getContext('2d');

// Declaring our global variables
const TIME_PER_GAME = 3; // minutes
const TIME_PER_WAVE = 15; // seconds
var numFlies = 3;
var counter = 0;

/*
function getFlies() {
    for(var i = 0; i < numFlies; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;

        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }
};


var runWaves = function(sec) {
    var countDown = setInterval(function() {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;

        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
        
        // upload wave
        wave--;
        
        if (wave < 0) {
            clearInterval(countDown);
            c.font = "200% Arial";
            c.fillText("GAME OVER", window.innerWidth / 2, window.innerHeight / 2);
        }
    }, 1000);
}*/

var displayCountDown = function(sec) {
    const minutes = Math.floor(sec / 60)
    const reminderSeconds = sec % 60;
    console.log(minutes + ':' + reminderSeconds);
}

var getCountDown = function(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayCountDown(seconds);
    
    var countDown = setInterval(function() {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        displayCountDown(secondsLeft);
        if (secondsLeft <= 0){
            clearInterval(countDown);
            return;
        }
    }, 1000);
}

// MAIN FUNCTION
var startGame = function() {
    getCountDown(TIME_PER_GAME * 60);
    //runWaves(TIME_PER_WAVE);
    //updateUserScores();
}

startGame();