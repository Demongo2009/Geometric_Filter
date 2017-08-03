function checkColor(triangle, imgPixData) {

    var redOdds = Math.abs(triangle.red - imgPixData[0]);
    var greenOdds = Math.abs(triangle.green - imgPixData[1]);
    var blueOdds = Math.abs(triangle.blue - imgPixData[2]);

    var colors = [redOdds, greenOdds, blueOdds];

    colors.sort(function(a, b) {

        return a - b;
    });

    var pointsOfPixel = colors[2];

    //console.log('Pixel gains: ' + pointsOfPixel + ' points');
    return pointsOfPixel;

}
