function checkColor(trianglePix, imgPix) {

    var redOdds = Math.abs(trianglePix[0] - imgPix[0]);
    var greenOdds = Math.abs(trianglePix[1] - imgPix[1]);
    var blueOdds = Math.abs(trianglePix[2] - imgPix[2]);

    var colors = [redOdds, greenOdds, blueOdds];

    colors.sort(function(a, b) {

        return a - b;
    });

    var pointsOfPixel = colors[2];

    console.log('Pixel gains: ' + pointsOfPixel + ' points');
    return pointsOfPixel;

}
