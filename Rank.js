var test = new Object();
test.a = [10,15];
test.b = [8,4];
test.c = [3,12];
test.red = 135;
test.green = 40;
test.blue = 210;

function rank(tri) {

    countRank++;

    var canvas = document.getElementById('Geometric_Filter');
    var ctx = canvas.getContext('2d');
    var points = 0;
    var pixels = 0;


    var LR = [tri.a[0], tri.b[0], tri.c[0]];
    LR.sort(function(a, b) {
        return a - b;
    })

    var left = LR[0];
    var right = LR[2];


    var TB = [tri.a[1], tri.b[1], tri.c[1]];
    TB.sort(function(a, b) {
        return a - b;
    })

    var top = TB[0];
    var bottom = TB[2];


    //console.log(left + ', ' + right + ', ' + top + ', ' + bottom);

    for (var i = 0; i < (Math.abs(top - bottom)); i++) {

        for (var j = 0; j < (Math.abs(left - right)); j++) {

            var trianglePix = ctx.getImageData(left + j, top + i, 1, 1).data;
            //console.log(trianglePix);

            if (tri.red !== trianglePix[0] || tri.green !== trianglePix[1] || tri.blue !== trianglePix[2]) continue;

            var imgPix = ctx.getImageData(imgX0 + left + j, top + i, 1, 1).data;


            var pointsOfPixel = 765 - (Math.abs(imgPix[0] - trianglePix[0]) +
                Math.abs(imgPix[1] - trianglePix[1]) +
                Math.abs(imgPix[2] - trianglePix[2]));

            pixels++;
            points += pointsOfPixel;

        }
    }

    if (points === 0) console.log('Kappa123');
    //console.log(pixels);
    var ranking = (points/(765 * pixels)) * 100;
    //console.log(ranking);
    return ranking;
}

//rank(test);