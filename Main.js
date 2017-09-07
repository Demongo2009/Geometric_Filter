function klik(){

    document.getElementById("snap").style.display="none";
    firstDraw();
    document.getElementById("przycisk").style.display="none";
    video.style.display = "none";
    document.getElementById("imgs").style.display="none";

}

population = new Array();

var canvas = document.getElementById('GeometricFilter');
var image = document.getElementById('image');

ctx = canvas.getContext('2d');
ctxImg = image.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

image.width = canvasWidth;
image.height = canvasHeight;


function zaladujObraz(fName) {

    var img = new Image();

    var origCanvas = document.getElementById('canvas');
    origCanvas.width = canvasWidth*factor;
    origCanvas.height = canvasHeight*factor;

    document.getElementById("przycisk").style.display="inline-block";
    document.getElementById("loadImg").style.display="none";
    document.getElementById("cameraON").style.display="none";

    img.addEventListener('load', function() {
        var wPrim = canvasHeight* img.width / img.height;

        ctxImg.drawImage(img, 0, 0, img.width,img.height,-(wPrim -canvasWidth )/2,0, wPrim , canvasHeight);


        origCanvas.getContext('2d').drawImage(img, 0,0, img.width,img.height,-(wPrim *factor-canvasWidth*factor )/2,0, wPrim *factor, canvasHeight*factor);

        console.time('anc');

    }, false);

    img.src = fName;
}

function main() {

    console.log('It lives!');

    for (var i = 0; i < popLength; i++) {

        population[i] = new Specimen();
        for (var j = 0; j < figuresLimit; j++) {

            population[i][j] = new Triangle();
        }
    }

    function createContextCanvas(name, width, height) {

        var canvas = document.createElement('canvas');
        canvas.id = name;
        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        return canvas.getContext('2d');
    }

    function createContextScore(name) {

        var score = document.createElement('DIV');
        score.id = name;
        score.style = "width:" + 30 + "px; height:" + 15 + "px; font-size:10px; display:inline-block";
        document.body.appendChild(score);
        return score.innerText;

    }

    if(debugCanvas) {
        ctxArray = [];
        for (var k = 0; k < popLength; k++) {
            ctxArray[k] = createContextCanvas("canvas" + k, canvasWidth, canvasHeight);
            createContextScore('score' + k);
        }
    }
}

main();