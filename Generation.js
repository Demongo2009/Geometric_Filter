function generation(population) {

    var best = population.slice(0, popLength * 0.2);
    var newGeneration = best;

    for (var i = 0; i < popLength * 0.4; i++) {

        do {

            var rand1 = Math.floor(Math.random() * (popLength * 0.2));
            var rand2 = Math.floor(Math.random() * (popLength * 0.2));

        } while (rand1 === rand2);

        var offSpr = crossover(best[rand1], best[rand2]);
        offSpr = mutate(offSpr);
        newGeneration.push(offSpr);
    }


    for (var i = 0; i < popLength; i++) {

        var newGroupOfTriangles = new Object()

        for (var j = 0; j < trianglesLimit; j++) {

            var newTriangle = new Triangle();
            newGroupOfTriangles[j] = newTriangle;
        }

        newGeneration.push(newGroupOfTriangles);
    }


    return newGeneration;
}
