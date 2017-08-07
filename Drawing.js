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

        /*if (population[i].points < 15) {
            console.log('\n');
            console.log(JSON.stringify(population[i]));
            console.log(population[i].points);
        }
        */
    }

    population.sort(function (a, b) {

        return a.points - b.points;
    });

    ctxBest.clearRect(0, 0, canvasWidth, canvasHeight);


    for (var i = 0; i < trianglesLimit; i++) {

        validate(population[0][i]);

        ctx.fillStyle = population[0][i].color;

        ctx.beginPath();
        ctx.moveTo(population[0][i].a[0], population[0][i].a[1]);
        ctx.lineTo(population[0][i].b[0], population[0][i].b[1]);
        ctx.lineTo(population[0][i].c[0], population[0][i].c[1]);
        ctx.fill();

    }


    population = generation(population);

    for (var g = 0; g < popLength; g++) {

        population[g].generationNumber = countGeneration;
    }

    //console.log(population);
    if ( generationNumber % 1000 === 0) console.log('Generation number: ' + generationNumber);

    setTimeout(draw, 10);
}


