function mathAnalysis(triangle, YW1, YW2, YW3, pixX, pixY) {

    counter++;

    var Y1 = (((triangle.b[1] - triangle.a[1]) * (pixX - triangle.a[0])) / (triangle.b[0] - triangle.a[0])) + triangle.a[1];


    if (counter < 3) {
        console.log(YW1);
        console.log(triangle.c[1]);
        console.log(Y1);
        console.log(pixY);
    }


    if (!((pixY <= Y1) && (triangle.c[1] <= YW1)) || !((pixY >= Y1) && (triangle.c[1] >= YW1))) {
        //console.log('Y1 false');
        return false;
    }

    var Y2 = (((triangle.c[1] - triangle.b[1])*(pixX - triangle.b[0]))/(triangle.c[0] - triangle.b[0])) + triangle.b[1];

    if (!((pixY <= Y2) && (triangle.a[1] <= YW2)) || !((pixY >= Y2) && (triangle.a[1] >= YW2))) {
        console.log('Y2 false');
        return false;
    }

    var Y3 = (((triangle.c[1] - triangle.a[1])*(pixX - triangle.a[0]))/(triangle.c[0] - triangle.a[0])) + triangle.a[1];

    if (!((pixY <= Y3) && (triangle.b[1] <= YW3)) || !((pixY >= Y3) && (triangle.b[1] >= YW3))) {
        console.log('Y3 false');
        return false;
    }
    return true;

}
