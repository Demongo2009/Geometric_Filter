function generation(population) {

    countGeneration++;



    var best = population.slice(0, popLength * 0.2);
    //var newGeneration = best;
    var newOffspring = new Array();

    var firstDesc = JSON.stringify([population[0][0],population[0][1]]);



    for (var i = 0; i < popLength * 0.3; i++) {

        do {

            var rand1 = Math.floor(Math.random() * (popLength * 0.2));
            var rand2 = Math.floor(Math.random() * (popLength * 0.2));

        } while (rand1 === rand2);

        var offSpr = crossover(best[rand1], best[rand2]);

        //newGeneration.push(offSpr);
        newOffspring.push(offSpr);
    }

    var newGeneration = best.concat(Mutate(newOffspring));
    //newGeneration = Mutate(newGeneration);


    for (var i = 0; i < popLength * 0.5; i++) {

        var newGroupOfTriangles = new Object();

        for (var j = 0; j < trianglesLimit; j++) {

            newGroupOfTriangles[j] = new Triangle();
        }

        newGeneration.push(newGroupOfTriangles);
    }

    if(firstDesc !== JSON.stringify([population[0][0],population[0][1]])){
        console.log(firstDesc);
        console.log(JSON.stringify([population[0][0],population[0][1]]));
        // debugger;
        throw Error();

    }

    generationNumber++;
    return newGeneration;
    // return population;
}
