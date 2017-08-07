function draw() {

    for (var i = popLength - 1; i >= 0; i--) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (var j = trianglesLimit - 1; j >= 0; j--) {

            validate(population[i][j]);

            ctx.fillStyle = population[i][j].color;

            ctx.beginPath();
            ctx.moveTo(population[i][j].a[0], population[i][j].a[1]);
            ctx.lineTo(population[i][j].b[0], population[i][j].b[1]);
            ctx.lineTo(population[i][j].c[0], population[i][j].c[1]);
            ctx.fill();

        }

        population[i].points = rank();

        if (population[i].points < 18) {
            console.log('\n');
            console.log(bestOfPopulation.length);
            console.log(JSON.stringify(population[i]));
            console.log(population[i].points);
            bestOfPopulation.push(population[i]);

            if (bestOfPopulation.length === popLength) {
                console.log('bestOfPopulation full');
                drawBest(bestOfPopulation);
                break;
            }
        }
    }

    population.sort(function (a, b) {

        return a.points - b.points;
    });

    population = generation(population);

    for (var g = 0; g < popLength; g++) {

        population[g].generationNumber = countGeneration;
    }

    //console.log(population);
    if ( generationNumber % 1000 === 0) console.log('Generation number: ' + generationNumber);

    if (keepGoingLoop) setTimeout(draw, 10);
}


function drawBest() {

    //console.log(JSON.stringify(bestOfPopulation));

    keepGoingLoop = false;

    for (var i = popLength - 1; i >= 0; i--) {

        for (var j = trianglesLimit - 1; j >= 0; j--) {

            validate(bestOfPopulation[i][j]);

            ctx.fillStyle = bestOfPopulation[i][j].color;

            ctx.beginPath();
            ctx.moveTo(bestOfPopulation[i][j].a[0], bestOfPopulation[i][j].a[1]);
            ctx.lineTo(bestOfPopulation[i][j].b[0], bestOfPopulation[i][j].b[1]);
            ctx.lineTo(bestOfPopulation[i][j].c[0], bestOfPopulation[i][j].c[1]);
            ctx.fill();
        }
        console.log('\n');
        console.log(i);
        console.log(JSON.stringify(bestOfPopulation[i]));
        console.log(JSON.stringify(bestOfPopulation[i].points));
    }


}