function draw() {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    //console.log(countRank);
    //console.log(population);


    for (var i = 0; i < trianglesLimit; i++) {

        validate(population[i]);
        ctx.fillStyle = population[i].color;

        ctx.beginPath();
        ctx.moveTo(population[i].a[0], population[i].a[1]);
        ctx.lineTo(population[i].b[0], population[i].b[1]);
        ctx.lineTo(population[i].c[0], population[i].c[1]);
        ctx.fill();

        //console.log('Drawing triangle');
        population[i].points = rank(population[i]);
        //console.log(population[i].points);
    }


    population.sort(function (a, b) {

        return a.points - b.points;
    })

    //console.log(JSON.stringify(population));

    population = generation(population);

}