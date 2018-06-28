// Setting up canvas's height and width
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Grabbing our canvas
var c = canvas.getContext('2d');

// Declaring our global variables
var wave = 2;
var numFlies = 3;

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

var startGame = function() {
    // 1000 ms = 1 sec, so 60,000 = 1 min
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
}

// Game starts here!
startGame();