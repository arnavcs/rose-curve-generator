let winHeight = window.innerHeight;
let winWidth = window.innerWidth;
let dim = Math.min(winHeight, winWidth);

let n = 1;
let d = 1;
let variety = 10;

function setup() {
    createCanvas(winWidth, winHeight);
    background(90, 63, 102);
    textSize(winHeight/2.4);
    textAlign(CENTER, CENTER);
    fill('rgba(195, 53, 102, 0.6)');
    text(`n:${n} d:${d}`, winWidth / 2, winHeight / 2);
    stroke('rgba(255, 53, 102, 0.6)');
    strokeWeight(5);
    angleMode(DEGREES);
}

let sectiondim = {
    x: winWidth / variety,
    y: winHeight / variety
};

let t = 0;
let pcor = {
    x: 0,
    y: 0
};
let cor = {
    x: 0,
    y: 0
};

function draw() {
    pcor = cor;
    cor = {
        x: ((0.9 * dim / 2) * (cos(t) * cos(n * t / d))) + winWidth/2,
        y: ((0.9 * dim / 2) * (sin(t) * cos(n * t / d))) + winHeight/2
    };
    if (t > 2) {
        line(pcor.x, pcor.y, cor.x, cor.y);
    }
    t += 2;
}

function mouseMoved() {
    if (!(n == Math.ceil(mouseX / sectiondim.x)) || !(d == Math.ceil(mouseY / sectiondim.y))) {
        n = Math.ceil(mouseX / sectiondim.x);
        d = Math.ceil(mouseY / sectiondim.y);
        clear();
        background(90, 63, 102);
        strokeWeight(0);
        text(`n:${n}  d:${d}`, winWidth / 2, winHeight / 2);
        strokeWeight(5);
        t = 0;
    }
}