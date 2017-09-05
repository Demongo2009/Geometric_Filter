function draw() {

    for (var i = popLength - 1; i >= 0; i--) {

        ctx.fillStyle = population[i].bgColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        for (var j = figuresLimit - 1; j >= 0; j--) {

            if (population[i][j] instanceof Triangle) drawTriangle(population[i][j]);
            else if (population[i][j] instanceof Circle) drawCircle(population[i][j]);

        }
        population[i].points = rank();
    }

    population.sort(function (a, b) {

        return b.points - a.points;
    });

    //var figuresScore = (population[0].points * 100)/(canvasSqure);
    var figuresScore = (population[0].points * 100)/(canvasSqure * 255 * 3);

    document.getElementById("bestScore").innerText = Math.floor(figuresScore) + '%' +'  (' + population[0].points + ')';

    if(debugCanvas) debugging();

    if (generationNumber % 100 === 0) {
        console.log('Generation number: ' + generationNumber);

        // if (lastFiguresScore + 0.05 > figuresScore) {
        //
        //     ancestors.push(population[0].copy());
        //     console.timeEnd('anc');
        //     console.log(ancestors[ancestors.length - 1].points);
        //     drawAncestors();
        //     console.time('anc');
        //
        //     for (var i = 0; i < popLength; i++) {
        //         for (var j = 0; j < figuresLimit; j++) {
        //
        //             population[i][j] = new Triangle();
        //         }
        //     }
        //
        //     lastFiguresScore = 0;
        //
        //     console.log('NEW BRANCH!');
        //
        // } else lastFiguresScore = figuresScore;

    }

    population = generation(population);

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