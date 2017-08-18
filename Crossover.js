function crossover(parent1, parent2) {

    var newGroupOfTriangles = new Object();

    newGroupOfTriangles.bgColor = {
       r:,
       g:,
        b:
    };

    for (var i = 0; i < figuresLimit; i++) {

        if (Math.floor(Math.random() * 2) === 0) {

            newGroupOfTriangles[i] = parent1[i].copy();
        } else {

            newGroupOfTriangles[i] = parent2[i].copy();
        }
    }

    return newGroupOfTriangles;
}
