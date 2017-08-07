function mutate(parent) {

    var offspring = new Triangle();



    return offspring;
}


function crossover(parent1, parent2) {

    var newGroupOfTriangles = new Object();

    var rand = Math.floor(Math.random() * trianglesLimit);

    for (var i = 0; i <= rand; i++) {

        newGroupOfTriangles[i] = parent1[i];
    }

    for (var i = rand + 1; i < trianglesLimit; i++) {

        newGroupOfTriangles[i] = parent2[i];
    }

    return newGroupOfTriangles;
}