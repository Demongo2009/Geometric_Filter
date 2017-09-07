var figuresData;

function rank() {

    var pixels = 0;
    var points = 0;
    figuresData = ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;

    for (var i = 0; i < canvasSqure * 4; i += 4) {

            var pointsOfPixel = checkColor(figuresData, imgData, i);
            pixels++;
            points += pointsOfPixel;
    }

    return points;
}

