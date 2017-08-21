function Mutate(population) {

    var mutationNumber = 5;

    for (var i = 0; i < population.length; i++) {
        //for (var j = 0; j < figuresLimit; j++) {
        var randSpecimen = Math.floor(Math.random() * figuresLimit);

        var event = Math.floor(Math.random() * mutationNumber);

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
        //}
    }

        var chanceToChange = 2;
        if (Math.floor(Math.random() * chanceToChange) === 0) mutate4(population[i]);
        if (Math.floor(Math.random() * chanceToChange) === 0) mutateBg(population[i]);

        if (ancestors.length !== 0)
            for (var j = 0; j < Math.floor(figuresLimit * 0.05); j++)
            mutate7(population[j]);
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

    var chanceToChange = 1;
    var maxChangeFactor = 1.50;
    var minChangeFactor  = 0.5;

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

    var chanceToChange = Math.floor(Math.random() * 3);
    var maxChangeFactor = 1.5;
    var minChangeFactor = 0.5;

    var mutated = parent.copy();

    if (chanceToChange === 0) {
        mutated.a[0] = mutated.a[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.a[0] > canvasWidth) mutated.a[0] = canvasWidth;

        mutated.a[1] = mutated.a[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.a[1] > canvasHeight) mutated.a[1] = canvasHeight;
    }

    if (chanceToChange === 1) {
        mutated.b[0] = mutated.b[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.b[0] > canvasWidth) mutated.b[0] = canvasWidth;

        mutated.b[1] = mutated.b[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.b[1] > canvasHeight) mutated.b[1] = canvasHeight;
    }

    if (chanceToChange === 2) {
        mutated.c[0] = mutated.c[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.c[0] > canvasWidth) mutated.c[0] = canvasWidth;

        mutated.c[1] = mutated.c[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.c[1] > canvasHeight) mutated.c[1] = canvasHeight;
    }

    return mutated;
}

function mutate3Cir(parent) {

    var chanceToChange = 1;
    var maxChangeFactor = 1.5;
    var minChangeFactor = 0.5;

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

    var newParent = new Specimen();
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

    var chanceToChange = 2;

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
    var maxChangeFactor = 1.25;
    var minChangeFactor = 0.75;

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

    var newParent = new Specimen();

    for (var i = 0; i < figuresLimit; i++) {

        newParent[i] = parent[i].copy();
    }

    newParent[0]=parent[rand].copy();
    newParent[rand]=parent[0].copy();

    return newParent;

}

function mutateBg(parent) {

    var maxChangeFactor = 1.50;
    var minChangeFactor  = 0.5;

        parent.r = Math.floor(parent.r * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (parent.r >= 255) parent.r = Math.floor(parent.r * minChangeFactor);

        parent.g = Math.floor(parent.g * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (parent.g >= 255) parent.g = Math.floor(parent.g * minChangeFactor);

        parent.b = Math.floor(parent.b * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (parent.b >= 255) parent.b = Math.floor(parent.b * minChangeFactor);

        parent.bgColor = 'rgb(' + parent.r + ', ' + parent.g + ', ' + parent.b + ')';
}

function mutate7(parent) {

    var rand = Math.floor(Math.random() * (figuresLimit / 2));
    var chooseAncestor = Math.floor(Math.random() * ancestors.length);
    var newParent = new Specimen();

    for (var i = 0; i < figuresLimit - 1; i++) {

        newParent[i + 1] = parent[i].copy();
    }

    newParent[0] = ancestors[chooseAncestor][rand].copy();

    return newParent;
}

