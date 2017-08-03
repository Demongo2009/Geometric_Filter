function main() {

    console.log('It lives!');
    counter = 0;

    canvasWidth = 240;
    canvasHeight = 358;
    trianglesLimit = 3;

    population = new Array();
    for (var i = 0; i < trianglesLimit; i++) {

        population[i] = new Triangle();
        //console.log(population[i]);
    }

    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');

    //var imgData = ctxImg.getImageData(0, 0, canvasWidth, canvasHeight).data;
    //console.log(imgData);

    var img = new Image();

    if (canvas.getContext) {

        ctx = canvas.getContext('2d');
        ctxImg = image.getContext('2d');


        img.addEventListener('load', function() {
            ctxImg.drawImage(img, 0, 0, 240, 358);

            imgData = ctxImg.getImageData(0, 0, canvasWidth, canvasHeight).data;
            console.log(imgData);

            console.log("Image drawn");

            draw();

        //setTimeout(draw, 200);

        }, false);

        img.src = 'Mona_Lisa.jpg';

    }

}