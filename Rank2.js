imgX0 = 240;
imgY0 = 358;

var test = new Object();
test.a = [10,15];
test.b = [8,4];
test.c = [3,12];
test.red = 135;
test.green = 40;
test.blue = 210;

function rank2(tri) {

    var canvas = document.getElementById('Geometric_Filter');
    var ctx = canvas.getContext('2d');
    var points = 0;
    var pixels = 0;

    //var imgData = ctx.getImageData(imgX0, 0, imgX0, imgY0).data;
    //var trianglesData = ctx.getImageData(0, 0, imgX0, imgY0).data;

    // Find left & right
    if (tri.a[0] > tri.b[0]) {

        if (tri.a[0] > tri.c[0]) {
            var right = tri.a[0]

            if (tri.b[0] > tri.c[0]) {
                var left = tri.c[0]
            } else {
                var left = tri.b[0]
            }

        } else {
            var right = tri.c[0];
            var left = tri.b[0]
        }
    } else if (tri.b[0] > tri.c[0]) {
        var right = tri.b[0]

        if (tri.a[0] > tr.c[0]) {
            var left = tri.c[0];
        } else {
            var left = tri.a[0];
        }

    } else {
        var right = tri.c[0];
        var left = tri.a[0]
    }


    // Find top and bottom
    if (tri.a[1] > tri.b[1]) {

        if (tri.a[1] > tri.c[1]) {
            var bottom = tri.a[1]

            if (tri.b[1] > tri.c[1]) {
                var top = tri.c[1]
            } else {
                var top = tri.b[1]
            }

        } else {
            var bottom = tri.c[1];
            var top = tri.b[1]
        }
    } else if (tri.b[1] > tri.c[1]) {
        var bottom = tri.b[1]

        if (tri.a[1] > tri.c[1]) {
            var top = tri.c[1];
        } else {
            var top = tri.a[1];
        }

    } else {
        var bottom = tri.c[1];
        var top = tri.a[1]
    }

    console.log(left + ',' + right + ', ' + top + ', ' + bottom);

    for (var i = 0; i < (Math.abs(top - bottom)); i++) {

        for (var j = 0; j < (Math.abs(left - right)); j++) {

            var trianglePix = ctx.getImageData(left + j, top + i, 1, 1).data;
            //console.log(trianglePix);

            if (tri.red !== trianglePix[0] || tri.green !== trianglePix[1] || tri.blue !== trianglePix[2]) continue;

            var imgPix = ctx.getImageData(imgX0 + left + j, imgY0 + top + i, 1, 1).data;

            var pointsOfPixel = 765 - (Math.abs(imgPix[0] - trianglePix[0]) +
                Math.abs(imgPix[1] - trianglePix[1]) +
                Math.abs(imgPix[2] - trianglePix[2]));

            pixels++;
            points += pointsOfPixel;

        }
    }

    var ranking = (points/(765 * pixels)) * 100;
    return ranking;
}

rank2(test);

