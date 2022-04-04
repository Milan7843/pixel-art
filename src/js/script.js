var canvas = document.getElementById("gamescreen");
var ctx = canvas.getContext("2d");

var mousePosition = {x:1, y:1};

var width = 466;
var height = 400;

const sizex = 60;
const sizey = 60;

var pixels = new Array(sizex);

var pixelSize = width/sizex;


function start() {
    initialiseField();
    drawCanvas();
}

start();

/**
* Draw the pixels onto the canvas.
*/
function drawCanvas() {
    // Emptying the background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Drawign each pixel
    for (var x = 0; x < sizex; x++) {
        for (var y = 0; y < sizey; y++) {
            if (this.pixels[x][y] == 1) {
                ctx.fillStyle = "rgba(0, 255, 0, 1)";
            }
            else {
                ctx.fillStyle = "rgba(255, 0, 0, 1)";
            }
            ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
        }
    }
}

// Mouse position handling
canvas.addEventListener('mousemove', function(evt) {
    mousePosition = getMousePosition(canvas, evt);
}, false);

/*
 * Initialises each pixel to be white
*/
function initialiseField() {
    for (var i = 0; i < this.pixels.length; i++) {
        this.pixels[i] = new Array(sizey);
        for (var j = 0; j < this.pixels[i].length; j++) {
            // Setting each square to an empty one
            this.pixels[i][j] = 0;
        }
    }
}

/**
* Return the mouse position inside the canvas.
*/
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

/**
 * Return the coordinates of the square the mouse is on, based on the mousePosition variable.
*/
function getMouseCoordinates() {
    if (typeof mousePosition.x == 'undefined'
     || typeof mousePosition.y == 'undefined') {
        return undefined;
    }
    return {
        x: Math.floor(mousePosition.x / width  * sizex),
        y: Math.floor(mousePosition.y / height * sizey)
    };
}

// Mouse click handling.
canvas.addEventListener('mousedown', function(evt) {
    let pos = getMouseCoordinates();
    if (typeof pos == 'undefined') {
        return;
    }

    // Do something with the mouse coordinates
    setPixel(pos.x, pos.y);
});

function setPixel(x, y) {
    this.pixels[x][y] = 1;
    drawCanvas();
}