var lastBestScore = -Infinity;

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

    // if(population[0].points<lastBestScore){
    //     console.log(JSON.stringify(population[0]));
    //     debugger;
    //
    // }

    population.sort(function (a, b) {

        return b.points - a.points;
    });



    if(population[0].points>lastBestScore){
        lastBestScore = population[0].points;
        // console.log(lastBestScore);
    }

    document.getElementById("bestScore").innerText = population[0].points;

    ctxBest.clearRect(0, 0, canvasWidth, canvasHeight);


    for (var i = trianglesLimit - 1; i >= 0; i--) {

        validate(population[0][i]);

        ctxBest.fillStyle = population[0][i].color;

        ctxBest.beginPath();
        ctxBest.moveTo(population[0][i].a[0], population[0][i].a[1]);
        ctxBest.lineTo(population[0][i].b[0], population[0][i].b[1]);
        ctxBest.lineTo(population[0][i].c[0], population[0][i].c[1]);
        ctxBest.fill();

    }

    var firstScore = population[0].points;

    population = generation(population);

    if(firstScore !== population[0].points){
        // debugger;
        throw Error();
    }

    for (var g = 0; g < popLength; g++) {

        population[g].generationNumber = countGeneration;
    }

    //console.log(population);
    if ( generationNumber % 50 === 0) console.log('Generation number: ' + generationNumber);

    if(generationNumber<1000){
        setTimeout(draw, 1);
    }
}


