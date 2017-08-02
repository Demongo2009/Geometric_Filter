function mathAnalysis(triangle, YW1, YW2, YW3, pixX, pixY) {


    var Y1 = (((triangle.b[1] - triangle.a[1])*(pixX - triangle.a[0]))/(triangle.b[0] - triangle.a[0])) + triangle.a[1];

    if ((pixY <= Y1 && triangle.c[1] <= YW1) || (pixY >= Y1 && triangle.c[1] >= YW1)) {

        var check1 = true;
    } else {
        var check1 = false;
    }


    var Y2 = (((triangle.c[1] - triangle.b[1])*(pixX - triangle.b[0]))/(triangle.c[0] - triangle.b[0])) + triangle.b[1];

    if ((pixY <= Y2 && triangle.a[1] <= YW2) || (pixY >= Y2 && triangle.a[1] >= YW2)) {

        var check2 = true;
    } else {
        var check2 = false;
    }


    var Y3 = (((triangle.c[1] - triangle.a[1])*(pixX - triangle.a[0]))/(triangle.c[0] - triangle.a[0])) + triangle.a[1];

    if ((pixY <= Y3 && triangle.b[1] <= YW3) || (pixY >= Y3 && triangle.b[1] >= YW3)) {

        var check3 = true;
    } else {
        var check3 = false;
    }

    if (check1 === true && check2 === true && check3 === true) {
        return true
    } else return false;


}
