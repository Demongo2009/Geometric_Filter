imgX0 = 240;
imgY0 = 358;

function rank() {

    var canvas = document.getElementById('Geometric_Filter');
    var ctx = canvas.getContext('2d');
    var points = 0;

    var imgData = ctx.getImageData(imgX0, 0, imgX0, imgY0).data;

    var trianglesData = ctx.getImageData(0, 0, imgX0, imgY0).data;

    for (var i = 0; i < 5; i++) {

        for (var j = 0; j < 10; j++) {

            var imgPix = ctx.getImageData(imgX0 + j, i, 1, 1).data;
            //console.log(imgPix);

            var trianglePix = ctx.getImageData(j, i, 1, 1).data;
            //console.log(trianglePix);

            var pointsOfPixel = 765 - (Math.abs(imgPix[0] - trianglePix[0]) + Math.abs(imgPix[1] - trianglePix[1]) + Math.abs(imgPix[2] - trianglePix[2]));

            //console.log(pointsOfPixel);

            //points += pointsOfPixel
        }
    }

    //return points;
}

