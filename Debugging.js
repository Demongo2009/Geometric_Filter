function debugging() {
    
    if(generationNumber % 20 === 0) {
        for (var k = 0; k < popLength; k++) {

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
                    ctxArray[k].arc(population[k][l].center[0], population[k][l].center[1], population[k][l].radius, 0, Math.PI * 2, true);
                    ctxArray[k].fill();
                }
            }

            var triScore = (population[k].points * 100)/(canvasSqure * 255 * 3);
            document.getElementById("score" + k).innerText = Math.floor(triScore) + '%' +'  (' + population[k].points + ')';
        }
    }
}
