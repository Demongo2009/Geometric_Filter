function draw() {

    // var t0 = performance.now();
    for (var i = popLength - 1; i >= 0; i--) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (var j = figuresLimit - 1; j >= 0; j--) {

            if (population[i][j] instanceof Triangle) drawTriangle(population[i][j]);
            else if (population[i][j] instanceof Circle) drawCircle(population[i][j]);

        }
        population[i].points = rank();
    }

    population.sort(function (a, b) {

        return b.points - a.points;
    });

    var score = (population[0].points * 100)/(canvasSqure * 255 * 3);


    document.getElementById("bestScore").innerText = Math.floor(score) + '%' +'  (' + population[0].points + ')';

    

    if(debugCanvas){
        for (var k=0; k<popLength; k++){

            ctxArray[k].clearRect(0, 0, canvasWidth, canvasHeight);

            for (var l = figuresLimit - 1; l >= 0; l--) {

                if (population[k][l] instanceof Triangle) {
                    validateTriangle(population[k][l]);

                    ctxArray[k].fillStyle = population[k][l].color;

                    ctxArray[k].beginPath();
                    ctxArray[k].moveTo(population[k][l].a[0], population[k][l].a[1]);
                    ctxArray[k].lineTo(population[k][l].b[0], population[k][l].b[1]);
                    ctxArray[k].lineTo(population[k][l].c[0], population[k][l].c[1]);
                    ctxArray[k].fill();
                }
                else if (population[k][l] instanceof Circle) {
                    validateCircle(population[k][l]);

                    ctxArray[k].fillStyle = population[k][l].color;

                    ctxArray[k].beginPath();
                    ctxArray[k].arc(population[k][l].center[0], population[k][l].center[1], population[k][l].radius, 0 , Math.PI * 2, true);
                    ctxArray[k].fill();
                }

            }


        }

    }






    population = generation(population);

    if (generationNumber % 100 === 0) {
        console.log('Generation number: ' + generationNumber);
        // var t1 = performance.now();
        // console.log('Draw time: ' + (Math.floor(t1 - t0)));
    }
        setTimeout(draw, 1);
}


function drawTriangle(triangle) {

    validateTriangle(triangle);

    ctx.fillStyle = triangle.color;

    ctx.beginPath();
    ctx.moveTo(triangle.a[0], triangle.a[1]);
    ctx.lineTo(triangle.b[0], triangle.b[1]);
    ctx.lineTo(triangle.c[0], triangle.c[1]);
    ctx.fill();
}

function drawCircle(circle) {

    validateCircle(circle);

    ctx.fillStyle = circle.color;

    ctx.beginPath();
    ctx.arc(circle.center[0], circle.center[1], circle.radius, 0 , Math.PI * 2, true);
    ctx.fill();
}