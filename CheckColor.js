function checkColor(trianglesPixData, imgPixData) {

    var redOdds = Math.abs(trianglesPixData[0] - imgPixData[0]);
    var greenOdds = Math.abs(trianglesPixData[1] - imgPixData[1]);
    var blueOdds = Math.abs(trianglesPixData[2] - imgPixData[2]);

    var colors = [redOdds, greenOdds, blueOdds];

    colors.sort(function(a, b) {

        return a - b;
    });

    var pointsOfPixel = redOdds+greenOdds+blueOdds;

    //console.log('Pixel gains: ' + pointsOfPixel + ' points');
    return pointsOfPixel;

}
