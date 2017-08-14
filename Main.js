function main() {

    console.log('It lives!');

    debugCanvas=true;

    generationNumber = 0;
    canvasWidth = 30;
    canvasHeight = 45;
    figuresLimit = 15;
    popLength = 50;
    canvasSqure = canvasWidth * canvasHeight;

    population = new Array();

    for (var i = 0; i < popLength; i++) {

        population[i] = new Object();

        for (var j = 0; j < figuresLimit; j++) {

            var newFigure;

            // if (Math.floor(Math.random() * 2) === 0)
            newFigure = new Triangle();
            // else
            // newFigure = new Circle();
            population[i][j] = newFigure;
        }
    }

    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');



    function createContext(name, width, height) {

        var canvas = document.createElement('canvas');
        canvas.id=name;
        canvas.width=width;
        canvas.height=height;
        document.body.appendChild(canvas);
        return canvas.getContext('2d');
    }

    ctxArray=[];
    if(debugCanvas)
    for(var k=0; k<popLength; k++)
    ctxArray[k]=createContext("canvas"+k,canvasWidth,canvasHeight);



    var img = new Image();

    if (canvas.getContext) {

        ctx = canvas.getContext('2d');
        ctxImg = image.getContext('2d');

        img.addEventListener('load', function() {
            ctxImg.drawImage(img, 0, 0, canvasWidth, canvasHeight);

            imgData = ctxImg.getImageData(0, 0, canvasWidth, canvasHeight).data;

            draw();

        }, false);

        // img.src = 'export.png';
        img.src = 'MonaLisa.jpg';
        // img.src = 'testImg.png';
        // img.src = prompt("lol");
    }
}