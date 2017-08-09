function generation(population) {

    var best = population.slice(0, popLength * 0.2);
    var newOffspring = new Array();

    for (var i = 0; i < popLength * 0.4; i++) {

        do {

            var rand1 = Math.floor(Math.random() * (popLength * 0.2));
            var rand2 = Math.floor(Math.random() * (popLength * 0.2));

        } while (rand1 === rand2);

        var offSpr = crossover(best[rand1], best[rand2]);

        newOffspring.push(offSpr);
    }

    var newGeneration = best.concat(Mutate(newOffspring));

    for (var i = 0; i < popLength * 0.4; i++) {

        var newGroupOfTriangles = new Object();

        for (var j = 0; j < figuresLimit; j++) {

            if (Math.floor(Math.random() * 2) === 0) newGroupOfTriangles[j] = new Triangle();
            else newGroupOfTriangles[j] = new Circle();
        }

        newGeneration.push(newGroupOfTriangles);
    }

    generationNumber++;
    return newGeneration;
}
