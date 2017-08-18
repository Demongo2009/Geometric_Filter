function checkColor(figuresPixData, imgPixData,offset) {

    var pointsOfPixel = 0;

    if (imgPixData[3+offset] === 0) {

        imgPixData[0+offset] = 255;
        imgPixData[1+offset] = 255;
        imgPixData[2+offset] = 255;
    }

    if (figuresPixData[3+offset] === 0) {

        figuresPixData[0+offset] = 255;
        figuresPixData[1+offset] = 255;
        figuresPixData[2+offset] = 255;
    }

    var redOdds = Math.abs(figuresPixData[0+offset] - imgPixData[0+offset]);
    var greenOdds = Math.abs(figuresPixData[1+offset] - imgPixData[1+offset]);
    var blueOdds = Math.abs(figuresPixData[2+offset] - imgPixData[2+offset]);

    //if (redOdds <= 15 && greenOdds <= 15 && blueOdds <= 15) pointsOfPixel = 1;

    //var pointsOfPixel = Math.pow((255-redOdds)*(255-greenOdds)*(255-blueOdds),1/3);
    var pointsOfPixel = (255-redOdds)+(255-greenOdds)+(255-blueOdds);

    return pointsOfPixel;
}
