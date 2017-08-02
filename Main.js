function main() {

    canvasWidth = 240;
    canvasHeight = 358;
    trianglesLimit = 10;

    population = new Array();
    for (var i = 0; i < trianglesLimit; i++) {

        population[i] = new Triangle();
        //console.log(population[i]);
    }

    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');

    var img = new Image();

    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');
        var ctxImg = image.getContext('2d');

        imgPix = ctxImg.getImageData(0, 0, canvasWidth, canvasHeight).data;

        img.addEventListener('load', function() {
            ctxImg.drawImage(img, 0, 0, 240, 358);

            //console.log("Image drawn");

            draw(ctx);

        setTimeout(draw, 200);

        }, false);

        img.src = 'Mona_Lisa.jpg';

    }

}