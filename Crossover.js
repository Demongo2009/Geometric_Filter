function crossover(parent1, parent2) {

    var newGroupOfTriangles = new Object();

    for (var i = 0; i < trianglesLimit; i++) {
        
        if (Math.floor(Math.random() * 2) === 0) {

            newGroupOfTriangles[i] = parent1[i].copy();
        } else {

            newGroupOfTriangles[i] = parent2[i].copy();
        }
    }

    return newGroupOfTriangles;
}
