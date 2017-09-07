var blur = 0;

function setBlur(val){
    blur = val;
}

function calibration() {

        var resizedCanvas = document.getElementById('resized');
        var scaledCanvas = document.getElementById('scaled');

        resizedCanvas.width = canvasWidth*factor;
        resizedCanvas.height = canvasHeight*factor;

        scaledCanvas.width = canvasWidth*factor;
        scaledCanvas.height = canvasHeight*factor;

        var ctxResized = resizedCanvas.getContext('2d');
        var ctxScaled = scaledCanvas.getContext('2d');


        var resized = population[0].copy();

        ctxResized.fillStyle = resized.bgColor;
        ctxResized.fillRect(0, 0, canvasWidth * factor, canvasHeight * factor);

        for (var i = figuresLimit - 1; i >= 0; i--) {

            resized[i].a[0] *= factor;
            resized[i].a[1] *= factor;
            resized[i].b[0] *= factor;
            resized[i].b[1] *= factor;
            resized[i].c[0] *= factor;
            resized[i].c[1] *= factor;

            ctxResized.fillStyle = resized[i].color;

            ctxResized.beginPath();
            ctxResized.moveTo(resized[i].a[0], resized[i].a[1]);
            ctxResized.lineTo(resized[i].b[0], resized[i].b[1]);
            ctxResized.lineTo(resized[i].c[0], resized[i].c[1]);
            ctxResized.fill();

        }
    ctxScaled.putImageData(ctxResized.getImageData(0, 0, canvasWidth * factor, canvasHeight * factor), 0, 0);

    scaledCanvas.style['-webkit-filter']='blur('+String(blur)+'px)';

}
