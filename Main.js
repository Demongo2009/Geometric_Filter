function main() {

    console.log('It lives!');

    debugCanvas = false;
    generationNumber = 0;
    canvasWidth = 30;
    canvasHeight = 45;
    figuresLimit = 40;
    popLength = 100;
    canvasSqure = canvasWidth * canvasHeight;
    ancestors = [];
    lastFiguresScore = 0;

    population = new Array();

    for (var i = 0; i < popLength; i++) {

        population[i] = new Specimen();
        for (var j = 0; j < figuresLimit; j++) {

            population[i][j] = new Triangle();
        }
    }

    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');

    function createContextCanvas(name, width, height) {

        var canvas = document.createElement('canvas');
        canvas.id=name;
        canvas.width=width;
        canvas.height=height;
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

    var img = new Image();

    ctxArray = [];
    if(debugCanvas)
        for(var k = 0; k < popLength; k++) {
            ctxArray[k] = createContextCanvas("canvas" + k, canvasWidth, canvasHeight);
            createContextScore('score' + k);
        }


    if (canvas.getContext) {

        ctx = canvas.getContext('2d');
        ctxImg = image.getContext('2d');

        img.addEventListener('load', function() {
            ctxImg.drawImage(img, 0, 0, canvasWidth, canvasHeight);

            imgData = ctxImg.getImageData(0, 0, canvasWidth, canvasHeight).data;

            draw();

        }, false);

        // img.src = 'export.png';
        // img.src = 'testImg.png';
        // img.src = 'MonaLisa.jpg';
        img.src = 'girl.png';
        // img.src = 'kolko.png';
        // img.src = 'zergling.jpg';
        // img.src = 'kordian.jpg';

    }
}
