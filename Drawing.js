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
        if (population[i].points < 20) console.log(population[i]);
    }

    //console.log('Drawn');
    population.sort(function (a, b) {

        return a.points - b.points;
    })

    population = generation(population);
    if ( generationNumber % 100 === 0) console.log('Generation number: ' + generationNumber);
    setTimeout(draw, 10);

}