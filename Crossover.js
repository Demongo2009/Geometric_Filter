function crossover(parent1, parent2) {

    var newGroupOfTriangles = new Object();

    newGroupOfTriangles.r = (parent1.r + parent2.r)/2;
    newGroupOfTriangles.g = (parent1.g + parent2.g)/2;
    newGroupOfTriangles.b = (parent1.b + parent2.b)/2;

    newGroupOfTriangles.bgColor = 'rgb(' + newGroupOfTriangles.r + ', ' + newGroupOfTriangles.g + ', ' + newGroupOfTriangles.b + ')';

    for (var i = 0; i < figuresLimit; i++) {

        if (Math.floor(Math.random() * 2) === 0) {

            newGroupOfTriangles[i] = parent1[i].copy();
        } else {

            newGroupOfTriangles[i] = parent2[i].copy();
        }
    }

    return newGroupOfTriangles;
}
