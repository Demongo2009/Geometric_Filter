function rank() {

    var pixels = 0;
    var points = 0;
    var figuresData = ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;

    for (var i = 0; i < canvasSqure * 4; i += 4) {

        var figuresPixData = figuresData.slice(i, i + 4);
        // if (figuresPixData[3] === 0) continue;

        var imgPixData = imgData.slice(i, i + 4);

        var pointsOfPixel = checkColor(figuresPixData, imgPixData);

        pixels++;
        points += pointsOfPixel;
    }

    //console.log(pixels);
    return points;
}

