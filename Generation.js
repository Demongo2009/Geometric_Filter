function generation(population) {
    var toppc=0.1;
    var best = population.slice(0, popLength * toppc);
    var newGeneration = best;
var newOffspirng=[];
    for (var i = 0; i < popLength * 0.4; i++) {

        do {

            var rand1 = Math.floor(Math.random() * (popLength * toppc));
            var rand2 = Math.floor(Math.random() * (popLength * toppc));

        } while (rand1 === rand2);

        var offSpr = crossover(best[rand1], best[rand2]);
        newOffspirng.push(offSpr);
    }
    //if(Math.random()*rank(population[0])>canvasSqure*255*0.01);
    newGeneration = newGeneration.concat(Mutate(newOffspirng));


    for (var i = 0; i < popLength * 0.5; i++) {

        var newGroupOfTriangles = new Object()

        for (var j = 0; j < trianglesLimit; j++) {

            newGroupOfTriangles[j] = new Triangle();
        }

        newGeneration.push(newGroupOfTriangles);
    }

    generationNumber++;
    //console.log(newGeneration);
    return newGeneration;
}
