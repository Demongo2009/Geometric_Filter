function checkColor(trianglesPixData, imgPixData) {

    var redOdds = Math.abs(trianglesPixData[0] - imgPixData[0]);
    var greenOdds = Math.abs(trianglesPixData[1] - imgPixData[1]);
    var blueOdds = Math.abs(trianglesPixData[2] - imgPixData[2]);

    //var pointsOfPixel = Math.pow((255-redOdds)*(255-greenOdds)*(255-blueOdds),1/3);
    var pointsOfPixel = (255-redOdds)+(255-greenOdds)+(255-blueOdds);

    return pointsOfPixel;
}
