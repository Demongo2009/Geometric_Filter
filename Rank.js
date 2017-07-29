imgX0 = 240;
imgY0 = 358;

function rank() {

    var canvas = document.getElementById('Geometric_Filter');
    var ctx = canvas.getContext('2d');


    var imgData = ctx.getImageData(imgX0, 0, imgX0, imgY0).data;

    var trianglesData = ctx.getImageData(0, 0, imgX0, imgY0).data;

    for (var i = 1; i < 5; i++) {

        for (var j = 1; j < 10; j++) {

            var imgPix = ctx.getImageData(imgX0 + j - 1, i - 1, 1, 1).data;
            console.log(imgPix);

            var trianglePix = ctx.getImageData(j - 1, i - 1, 1, 1).data;
            console.log(trianglePix);



        }
    }


}

