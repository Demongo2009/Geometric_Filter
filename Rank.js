function rank(triangle) {

    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');
    var ctx = canvas.getContext('2d');
    var ctxImg = image.getContext('2d');
    var pointsSummedUp = 0;
    var pixels = 0;


    var LR = [triangle.a[0], triangle.b[0], triangle.c[0]];
    LR.sort(function(a, b) {
        return a - b;
    })

    var left = LR[0];
    var right = LR[2];


    var TB = [triangle.a[1], triangle.b[1], triangle.c[1]];
    TB.sort(function(a, b) {
        return a - b;
    })

    var top = TB[0];
    var bottom = TB[2];


    //console.log(left + ', ' + right + ', ' + top + ', ' + bottom);

    for (var i = 0; i < (Math.abs(top - bottom)); i++) {
        for (var j = 0; j < (Math.abs(left - right)); j++) {

            var pixX = left + j;
            var pixY = top + i;

            var trianglePix = ctx.getImageData(left + j, top + i, 1, 1).data;

            if (triangle.red !== trianglePix[0] || triangle.green !== trianglePix[1] || triangle.blue !== trianglePix[2]) continue;


            var imgPix = ctxImg.getImageData(left + j, top + i, 1, 1).data;

            //ctxImg.strokeRect(left + j, top + i, 1, 1); // Test

            //var pointsOfPixel = 765 - (Math.abs(imgPix[0] - trianglePix[0]) +
            //   Math.abs(imgPix[1] - trianglePix[1]) +
            //   Math.abs(imgPix[2] - trianglePix[2]));

            var pointsOfPixel = checkColor(trianglePix, imgPix);

            pixels++;
            pointsSummedUp += pointsOfPixel;

        }
    }
    //console.log('Pixels: ' + pixels);
    if (pointsSummedUp === 0) {
        console.log('Pixels: ' + pixels);
        console.log('Points = 0');
    }
    //var ranking = (pointsSummedUp/(765 * pixels)) * 100;
    var ranking = pointsSummedUp/pixels;
    //console.log('Rank performing');
    //console.log('Ranking: ' + ranking);
    if (ranking < 20) console.log(ranking);
    return ranking;
}

//rank(test);