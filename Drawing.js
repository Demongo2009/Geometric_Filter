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

        if (population[i].points < 255*0.01) {
            console.log(JSON.stringify(population[i]));
            console.log(population[i].points);
            bestOfPopulation.push(population[i]);

            if (bestOfPopulation.length === 1) {
                console.log(JSON.stringify(bestOfPopulation));
                console.log('bestOfPopulation full');
                drawBest(bestOfPopulation);
                break;
            }

            //for (var j = 0; j < trianglesLimit; j++) {

            //    population[i][j] = new Triangle();
            //}

        }
    }

    //console.log('Drawn');
    population.sort(function (a, b) {

        return a.points - b.points;
    })

    population = generation(population);
    if ( generationNumber % 1000 === 0) console.log('Generation number: ' + generationNumber);

    if (keepGoingLoop) setTimeout(draw, 1);
}


function drawBest (bestOfPopulation) {

    console.log(JSON.stringify(bestOfPopulation));

    keepGoingLoop = false;

    for (var i = 1 - 1; i >= 0; i--) {

        for (var j = 1 - 1; j >= 0; j--) {

            validate(bestOfPopulation[i][j]);

            ctx.fillStyle = bestOfPopulation[i][j].color;

            ctx.beginPath();
            ctx.moveTo(bestOfPopulation[i][j].a[0], bestOfPopulation[i][j].a[1]);
            ctx.lineTo(bestOfPopulation[i][j].b[0], bestOfPopulation[i][j].b[1]);
            ctx.lineTo(bestOfPopulation[i][j].c[0], bestOfPopulation[i][j].c[1]);
            ctx.fill();

        }
    }


}