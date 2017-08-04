function rank(triangles) {

    var pointsSummedUp = 0;

    for (var i = 0; i < trianglesLimit; i++) {

        var pointsOfTriangle = 0;
        var pixels = 0;

        var w = triangles[i].a[0];
        var t = triangles[i].b[0];
        var f = triangles[i].c[0];

        var LR = [triangles[i].a[0], triangles[i].b[0], triangles[i].c[0]];
        LR.sort(function(a, b) {
            return a - b;
        })

        var left = LR[0];
        var right = LR[2];


        var TB = [triangles[i].a[1], triangles[i].b[1], triangles[i].c[1]];
        TB.sort(function(a, b) {
            return a - b;
        })

        var top = TB[0];
        var bottom = TB[2];


        var YW1 = (((triangles[i].b[1] - triangles[i].a[1])*(triangles[i].c[0] - triangles[i].a[0]))/(triangles[i].b[0] - triangles[i].a[0])) + triangles[i].a[1];

        var YW2 = (((triangles[i].c[1] - triangles[i].b[1])*(triangles[i].a[0] - triangles[i].b[0]))/(triangles[i].c[0] - triangles[i].b[0])) + triangles[i].b[1];

        var YW3 = (((triangles[i].c[1] - triangles[i].a[1])*(triangles[i].c[0] - triangles[i].a[0]))/(triangles[i].c[0] - triangles[i].a[0])) + triangles[i].a[1];

        var BTside = bottom - top;
        var RLside = right - left;

        for (var y = 0; y < BTside; y++) {
            for (var x = 0; x < RLside; x++) {

                var pixX = left + x;
                var pixY = top + y;

                //console.log(mathAnalysis(triangles[i], YW1, YW2, YW3, pixX, pixY));
                if (!mathAnalysis(triangles[i], YW1, YW2, YW3, pixX, pixY)) continue;

                //console.log('\n');

                var startSlice = (y * (canvasWidth * 4)) + (x * 4);

                var imgPixData = imgData.slice(startSlice, startSlice + 4);
                //console.log(imgPixData);

                var pointsOfPixel = checkColor(triangles[i], imgPixData);

                pixels++;
                pointsOfTriangle += pointsOfPixel;
                pointsOfTriangle = pointsOfTriangle;
            }
        }

        console.log(pixels);
        console.log(pointsOfTriangle);
        if (pixels === 0) debugger;
        if (typeof pointsOfTriangle !== 'number') debugger;
        console.log('\n');
        pointsOfTriangle = pointsOfTriangle / pixels;
        pointsSummedUp += pointsOfTriangle;
        if (typeof pointsSummedUp !== 'number') debugger;
    }

    console.log(pointsSummedUp);
    var ranking = pointsSummedUp / trianglesLimit;

    if (pointsSummedUp === 0) {
        console.log('Points = 0');
        debugger;
    }

    if (ranking < 20) console.log(ranking);
    return ranking;
}

//rank(test);