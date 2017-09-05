function rank() {

    var pixels = 0;
    var points = 0;
    // console.time('getImageData');
    var figuresData = ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;
    // console.timeEnd('getImageData');

    // console.time('for');
    for (var i = 0; i < canvasSqure * 4; i += 4) {

        // if(figuresData[i+3]!==0) {
            var pointsOfPixel = checkColor(figuresData, imgData, i);


            pixels++;
            points += pointsOfPixel;
        // }
    }
    // console.timeEnd('for');

    //console.log(pixels);
    return points/*/(Math.pow(pixels,0.95))*/;
}

