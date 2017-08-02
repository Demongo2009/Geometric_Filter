function generation(population) {

    //console.log('New population');

    var best = population.slice(0,trianglesLimit * 0.2);
    var newGeneration = best;

    for (var i = 0; i < trianglesLimit * 0.4; i++) {

        do {

            var rand1 = Math.floor(Math.random() * (trianglesLimit * 0.2));
            var rand2 = Math.floor(Math.random() * (trianglesLimit * 0.2));

        } while (rand1 === rand2);

        var offSpr = crossover(best[rand1], best[rand2]);
        offSpr = mutate(offSpr);
        newGeneration.push(offSpr);
    }

    for (var i = 0; i < trianglesLimit * 0.4; i++) {

        var randTriangle = new Triangle;
        newGeneration.push(randTriangle);
    }

    //console.log(newGeneration);
    return newGeneration;
}
