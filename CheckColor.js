function checkColor(triangle, imgPix) {

    var redOdds = Math.abs(triangle.red - imgPix[0]);
    var greenOdds = Math.abs(triangle.green - imgPix[1]);
    var blueOdds = Math.abs(triangle.blue - imgPix[2]);

    var colors = [redOdds, greenOdds, blueOdds];

    colors.sort(function(a, b) {

        return a - b;
    });

    var pointsOfPixel = colors[2];

    //console.log('Pixel gains: ' + pointsOfPixel + ' points');
    return pointsOfPixel;

}
