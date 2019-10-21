let col, row;
let scl = 50;
let w = 600;
let h = 300;
let z = [];
var fly = 0;

p5.disableFriendlyErrors = true;

function setup() {

    var canvasDiv = document.getElementById('p5-drawing');
    var width = canvasDiv.offsetWidth;
    var height = 300;
    var sketchCanvas = createCanvas(width, height, WEBGL);
    sketchCanvas.parent("p5-drawing");
    
    col = w / scl;
    row = h / scl;

    var yoff = 0;
    for(let y = 0; y < row; y++) {
        var xoff = 0;
        z[y] = [];
        for(let x = 0; x < col; x++) {
            z[y][x] = map(noise(xoff, yoff), 0, 1, -50, 50);
            xoff += 0.1;
        }
        yoff += 0.1;
    }

}

function draw() {

    fly -= 0.0025;
    var yoff = fly;
    for(let y = 0; y < row; y++) {
        var xoff = 0;
        z[y] = [];
        for(let x = 0; x < col; x++) {
            z[y][x] = map(noise(xoff, yoff), 0, 1, -50, 50);
            xoff += 0.1;
        }
        yoff += 0.1;
    }

    background(255, 255);
    stroke(0);
    noFill();

    /*map(mouseX, 0, width, 0, PI/3)*/
    rotateX(map(mouseY, 0, height, PI/4, PI/3));
    rotateZ(map(mouseX, 0, width, -PI/10, PI/6));

    translate(-w/2, -h/2);

    for(let y = 0; y < row - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for(let x = 0; x < col; x++) {
            vertex(x*scl, y*scl, z[y][x]);
            vertex(x*scl, (y+1)*scl, z[y+1][x]);
        }
        endShape();
    }
    console.log(frameRate());
}