function main() {

    console.log('It lives!');
    counter = 0;

    canvasWidth = 30;
    canvasHeight = 45;
    trianglesLimit = 10;
    popLength = 20;

    population = new Array();

    for (var i = 0; i < popLength; i++) {

        population[i] = new Object()

        for (var j = 0; j < trianglesLimit; j++) {

            var newTriangle = new Triangle();
            population[i][j] = newTriangle;
        }
    }

    console.log(population);

    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');

    //var imgData = ctxImg.getImageData(0, 0, canvasWidth, canvasHeight).data;
    //console.log(imgData);

    var img = new Image();

    if (canvas.getContext) {

        ctx = canvas.getContext('2d');
        ctxImg = image.getContext('2d');


        img.addEventListener('load', function() {
            ctxImg.drawImage(img, 0, 0, canvasWidth, canvasHeight);

            imgData = ctxImg.getImageData(0, 0, canvasWidth, canvasHeight).data;
            //console.log(imgData);

            console.log("Image drawn");

            draw();

        setTimeout(draw, 200);

        }, false);

        img.src = 'Mona_Lisa.jpg';

    }

}