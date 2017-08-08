function rank() {

    var pixels = 0;
    var points = 0;
    var trianglesData = ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;

    for (var i = 0; i < canvasSqure; i += 4) {

        var trianglesPixData = trianglesData.slice(i, i + 4);
        // if (trianglesPixData[3] === 0) continue;

        var imgPixData = imgData.slice(i, i + 4);

        var pointsOfPixel = checkColor(trianglesPixData, imgPixData);

        pixels++;
        points += pointsOfPixel;
    }

    return points;
}

