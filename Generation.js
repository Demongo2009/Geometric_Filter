function generation(population) {

    var best = population.slice(0, popLength * 0.2);
    var newOffspring = new Array();

    for (var i = 0; i < popLength * 0.8; i++) {

        do {

            var rand1 = Math.floor(Math.random() * (popLength * 0.2));
            var rand2 = Math.floor(Math.random() * (popLength * 0.2));

        } while (rand1 === rand2);

        var offSpr = crossover(best[rand1], best[rand2]);

        newOffspring.push(offSpr);
    }

    // console.time('Mutate');
    var newGeneration = best.concat(Mutate(newOffspring));
    // console.timeEnd('Mutate');

    generationNumber++;
    return newGeneration;
}
