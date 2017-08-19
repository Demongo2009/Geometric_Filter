function draw() {

    // console.time('drawing');
    for (var i = popLength - 1; i >= 0; i--) {

        ctx.fillStyle = population[i].bgColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // console.time('draw triangles');
        for (var j = figuresLimit - 1; j >= 0; j--) {

            if (population[i][j] instanceof Triangle) drawTriangle(population[i][j]);
            else if (population[i][j] instanceof Circle) drawCircle(population[i][j]);

        }
        // console.time('rank');
        population[i].points = rank();
        // console.timeEnd('rank');
    }
        // console.timeEnd('draw triangles');

    // console.time('sortowanie');
    population.sort(function (a, b) {

        return b.points - a.points;
    });
    // console.timeEnd('sortowanie');

    //var figuresScore = (population[0].points * 100)/(canvasSqure);
    figuresScore = (population[0].points * 100)/(canvasSqure * 255 * 3);

    document.getElementById("bestScore").innerText = Math.floor(figuresScore) + '%' +'  (' + population[0].points + ')';

    if(debugCanvas) debugging();

    // if(figuresScore < 90){
    //     population = generation(population);
    // }else{
    //     population = generationPhase2(population);
    // }

    // console.timeEnd('drawing');

    // console.time('generation');
    // console.timeEnd('generation');

    if (generationNumber % 100 === 0) {

        if((lastFiguresScore + 0.05)> figuresScore){

            ancestors.push(population[0]);// copy Specimen than Triangles <----------------------
            debugger;

            for(var i=0; i < popLength ; i++) {
                for (var j = 0; j < figuresLimit; j++) {

                    var newFigure;

                    // if (Math.floor(Math.random() * 2) === 0)

                    // else
                    // newFigure = new Circle();
                    population[i][j] = new Triangle();
                }
            }


            if(debugCanvas) {

                ancestorsCtxArray[ancestorsCtxArray.length] = createContextCanvas("ancestorCanvas" + ancestors.length, canvasWidth, canvasHeight);
                createContextScore('ancestorScore' + ancestors.length);
            }

            lastFiguresScore=0;
            console.log("NEW BRANCH!!");
        }else{
            lastFiguresScore=figuresScore;
        }

        console.log('Generation number: ' + generationNumber);
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