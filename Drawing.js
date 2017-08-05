function draw() {

    for (var i = 0; i < popLength; i++) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (var j = 0; j < trianglesLimit; j++) {

            validate(population[i][j]);

            ctx.fillStyle = population[i][j].color;

            ctx.beginPath();
            ctx.moveTo(population[i][j].a[0], population[i][j].a[1]);
            ctx.lineTo(population[i][j].b[0], population[i][j].b[1]);
            ctx.lineTo(population[i][j].c[0], population[i][j].c[1]);
            ctx.fill();

        }

        population[i].points = rank();
    }


    population.sort(function (a, b) {

        return a.points - b.points;
    })

    population = generation(population);

}