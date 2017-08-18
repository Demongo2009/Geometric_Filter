function MutatePhase2(population) {

    var mutationNumber = 5;
    var case0,case1,case2,case3,case4=false;
    var event=0;

    for (var i = 0; i < population.length; i++) {
        if(event===5)event=0;


        var randSpecimen = Math.floor(Math.random() * figuresLimit);



        if (population[i][randSpecimen] instanceof Triangle) {

            switch (event) {

                case 0:
                        population[i][randSpecimen] = mutate1();

                    break;

                case 1:
                        population[i][randSpecimen] = mutate2(population[i][randSpecimen]);
                    break;

                case 2:
                        population[i][randSpecimen] = mutate3Tri(population[i][randSpecimen]);
                    break;

                case 3:
                        population[i][randSpecimen] = mutate5Tri(population[i][randSpecimen]);
                    break;

                case 4:
                        population[i] = mutate6(population[i]);
                    break;


            }
            // } else if (population[i][j] instanceof Circle) {
            //
            //     switch (event) {
            //
            //         case 0:
            //             population[i][j] = mutate1();
            //             break;
            //
            //         case 1:
            //             population[i][j] = mutate2(population[i][j]);
            //             break;
            //
            //         case 2:
            //             population[i][j] = mutate3Cir(population[i][j]);
            //             break;
            //
            //         case 3:
            //             population[i][j] = mutate5Cir(population[i][j]);
            //             break;
            //
            //     }
            event++;

        }
        // }

        var chanceToChange = 2;
        if (Math.floor(Math.random() * chanceToChange) === 0) mutate4(population[i]);
    }

    return population;
}

function mutate1() {

    // if (Math.floor(Math.random() * 2) === 0)
    var mutated = new Triangle();
    // else
    // var mutated = new Circle();

    return mutated;
}

function mutate2(parent) {

    var chanceToChange = 2;
    var maxChangeFactor = 1.25;
    var minChangeFactor  = 0.75;

    var mutated = parent.copy();

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.red = Math.floor(mutated.red * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (mutated.red >= 255) mutated.red = Math.floor(mutated.red * minChangeFactor);
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.green = Math.floor(mutated.green * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (mutated.green >= 255) mutated.green = Math.floor(mutated.green * minChangeFactor);
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.blue = Math.floor(mutated.blue * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (mutated.blue >= 255) mutated.blue = Math.floor(mutated.blue * minChangeFactor);
    }

    return mutated;
}

function mutate3Tri(parent) {

    var chanceToChange = 2;
    var maxChangeFactor = 1.25;
    var minChangeFactor = 0.75;

    var mutated = parent.copy();

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.a[0] = mutated.a[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.a[0] > canvasWidth) mutated.a[0] = canvasWidth;
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.a[1] = mutated.a[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.a[1] > canvasHeight) mutated.a[1] = canvasHeight;
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.b[0] = mutated.b[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.b[0] > canvasWidth) mutated.b[0] = canvasWidth;
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.b[1] = mutated.b[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.b[1] > canvasHeight) mutated.b[1] = canvasHeight;
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.c[0] = mutated.c[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.c[0] > canvasWidth) mutated.c[0] = canvasWidth;
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.c[1] = mutated.c[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.c[1] > canvasHeight) mutated.c[1] = canvasHeight;
    }

    return mutated;
}

function mutate3Cir(parent) {

    var chanceToChange = 1;
    var maxChangeFactor = 1.10;
    var minChangeFactor = 0.90;

    var mutated = parent.copy();

    if (Math.floor(Math.random() * chanceToChange) === 0) {

        var bufferCenter0 = mutated.center[0];
        var bufferCenter1 = mutated.center[1];

        mutated.center[0] = mutated.center[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        mutated.center[1] = mutated.center[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.center[0] + mutated.radius > canvasWidth || mutated.center[0] - mutated.radius < 0 ) mutated.center[0] = bufferCenter0;
        if (mutated.center[1] + mutated.radius > canvasHeight || mutated.center[1] - mutated.radius < 0) mutated.center[1] = bufferCenter1;
    }
    return mutated;
}

function mutate4(parent) {

    var rand = Math.floor(Math.random() * figuresLimit);

    var newParent = new Object();
    var j = 0;

    for (var i = rand; i < figuresLimit; i++) {

        newParent[j] = parent[i].copy();
        j++
    }

    for (var i = 0; i < rand; i++) {

        newParent[j] = parent[i].copy();
        j++
    }

    return newParent;
}


function mutate5Tri(parent) {

    var chanceToChange = 1;

    var mutated = parent.copy();

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        mutated.a[0] = canvasWidth - mutated.a[0];
        mutated.a[1] = canvasHeight - mutated.a[1];
        mutated.b[0] = canvasWidth - mutated.b[0];
        mutated.b[1] = canvasHeight - mutated.b[1];
        mutated.c[0] = canvasWidth - mutated.c[0];
        mutated.c[1] = canvasHeight - mutated.c[1];
    }

    return mutated;
}

function mutate5Cir(parent) {

    var chanceToChange = 1;
    var maxChangeFactor = 1.10;
    var minChangeFactor = 0.90;

    var mutated = parent.copy();

    if (Math.floor(Math.random() * chanceToChange) === 0) {

        var buffer = mutated.radius;

        mutated.radius = mutated.radius * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.center[0] + mutated.radius > canvasWidth || mutated.center[1] + mutated.radius > canvasHeight || mutated.center[0] - mutated.radius < 0 || mutated.center[1] - mutated.radius < 0) mutated.radius = buffer;
    }

    return mutated;
}


function mutate6(parent){
    var rand = Math.floor(Math.random() * figuresLimit-1)+1;

    var newParent = new Object();

    for (var i = 0; i < figuresLimit; i++) {

        newParent[i] = parent[i].copy();
    }

    newParent[0]=parent[rand].copy();
    newParent[rand]=parent[0].copy();

    return newParent;

}
function mutate7(parent) {

}



