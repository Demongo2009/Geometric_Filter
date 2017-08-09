function draw() {

    for (var i = popLength - 1; i >= 0; i--) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (var j = figuresLimit - 1; j >= 0; j--) {

            if (population[i][j] instanceof Triangle) drawTriangle();
            else if (population[i][j] instanceof Circle) drawCircle();

        }

        population[i].points = rank();
    }

    population.sort(function (a, b) {

        return b.points - a.points;
    });


    document.getElementById("bestScore").innerText = population[0].points;

    ctxBest.clearRect(0, 0, canvasWidth, canvasHeight);


    for (var i = figuresLimit - 1; i >= 0; i--) {

        validateTriangle(population[0][i]);

        ctxBest.fillStyle = population[0][i].color;

        ctxBest.beginPath();
        ctxBest.moveTo(population[0][i].a[0], population[0][i].a[1]);
        ctxBest.lineTo(population[0][i].b[0], population[0][i].b[1]);
        ctxBest.lineTo(population[0][i].c[0], population[0][i].c[1]);
        ctxBest.fill();

    }

    population = generation(population);

    //console.log(population);
    if ( generationNumber % 100 === 0) console.log('Generation number: ' + generationNumber);

        setTimeout(draw, 1);
}


function drawTriangle() {

    validateTriangle(population[i][j]);

    ctx.fillStyle = population[i][j].color;

    ctx.beginPath();
    ctx.moveTo(population[i][j].a[0], population[i][j].a[1]);
    ctx.lineTo(population[i][j].b[0], population[i][j].b[1]);
    ctx.lineTo(population[i][j].c[0], population[i][j].c[1]);
    ctx.fill();

}

function drawCircle() {

    validateCircle(population[i][j]);

    ctx.fillStyle = population[i][j].color;

    ctx.beginPath();
    ctx.arc(population[i][j].center[0], population[i][j].center[1], population[i][j].radius, 0 , Math.PI * 2, true);
    ctx.fill();
}