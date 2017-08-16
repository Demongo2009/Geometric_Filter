function checkColor(figuresPixData, imgPixData) {

    var pointsOfPixel = 0;

    if (imgPixData[3] === 0) {

        imgPixData[0] = 255;
        imgPixData[1] = 255;
        imgPixData[2] = 255;
    }

    if (figuresPixData[3] === 0) {

        figuresPixData[0] = 255;
        figuresPixData[1] = 255;
        figuresPixData[2] = 255;
    }

    var redOdds = Math.abs(figuresPixData[0] - imgPixData[0]);
    var greenOdds = Math.abs(figuresPixData[1] - imgPixData[1]);
    var blueOdds = Math.abs(figuresPixData[2] - imgPixData[2]);

    //if (redOdds <= 15 && greenOdds <= 15 && blueOdds <= 15) pointsOfPixel = 1;

    //var pointsOfPixel = Math.pow((255-redOdds)*(255-greenOdds)*(255-blueOdds),1/3);
    var pointsOfPixel = (255-redOdds)+(255-greenOdds)+(255-blueOdds);

    return pointsOfPixel;
}
