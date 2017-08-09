function Mutate(population) {

    var mutationNumber = 4;

    for (var i = 0; i < population.length; i++) {
        for (var j = 0; j < figuresLimit; j++) {

            var event = Math.floor(Math.random() * mutationNumber);

            if (population[i][j] === undefined) debugger;
            if (population[i][j] instanceof Triangle) {

                switch (event) {

                    case 0:
                        population[i][j] = mutate1(population[i][j]);
                        break;

                    case 1:
                        population[i][j] = mutate2(population[i][j]);
                        break;

                    case 2:
                        population[i][j] = mutate3Tri(population[i][j]);
                        break;

                    case 3:
                        population[i][j] = mutate5Tri(population[i][j]);
                        break;

                }
            } else if (population[i][j] instanceof Circle) {

                switch (event) {

                    case 0:
                        population[i][j] = mutate1(population[i][j]);
                        break;

                    case 1:
                        population[i][j] = mutate2(population[i][j]);
                        break;

                    case 2:
                        population[i][j] = mutate3Cir(population[i][j]);
                        break;

                    case 3:
                        population[i][j] = mutate5Cir(population[i][j]);
                        break;

                }
            }
        }

        var chanceToChange = 4;
        if (Math.floor(Math.random() * chanceToChange) === 0) mutate4(population[i]);
    }

    return population;
}


function mutate1(parent) {

    if (Math.floor(Math.random() * 2) === 0) parent = new Triangle();
    else parent = new Circle();

    return parent;
}

function mutate2(parent) {

    var chanceToChange = 3;
    var maxChangeFactor = 1.10;
    var minChangeFactor  = 0.90;

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        parent.red = Math.floor(parent.red * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (parent.red >= 255) parent.red = Math.floor(parent.red * minChangeFactor);
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        parent.green = Math.floor(parent.green * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (parent.green >= 255) parent.green = Math.floor(parent.green * minChangeFactor);
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        parent.blue = Math.floor(parent.blue * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
        if (parent.blue >= 255) parent.blue = Math.floor(parent.blue * minChangeFactor);
    }

    return parent;
}

function mutate3Tri(parent) {

    var chanceToChange = 3;
    var maxChangeFactor = 1.10;
    var minChangeFactor = 0.90;


    if (Math.floor(Math.random() * chanceToChange) === 0) {
        parent.a[0] = parent.a[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        parent.a[1] = parent.a[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (parent.a[0] > canvasWidth) parent.a[0] = canvasWidth;
        if (parent.a[1] > canvasHeight) parent.a[1] = canvasHeight;
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        parent.b[0] = parent.b[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        parent.b[1] = parent.b[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (parent.b[0] > canvasWidth) parent.b[0] = canvasWidth;
        if (parent.b[1] > canvasHeight) parent.b[1] = canvasHeight;
    }

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        parent.c[0] = parent.c[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        parent.c[1] = parent.c[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (parent.c[0] > canvasWidth) parent.c[0] = canvasWidth;
        if (parent.c[1] > canvasHeight) parent.c[1] = canvasHeight;
    }

    return parent;
}

function mutate3Cir(parent) {

    var chanceToChange = 2;
    var maxChangeFactor = 1.10;
    var minChangeFactor = 0.90;


    if (Math.floor(Math.random() * chanceToChange) === 0) {

        var bufferCenter0 = parent.center[0];
        var bufferCenter1 = parent.center[1];

        parent.center[0] = parent.center[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        parent.center[1] = parent.center[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (parent.center[0] + parent.radius > canvasWidth || parent.center[0] - parent.radius < 0 ) parent.center[0] = bufferCenter0;
        if (parent.center[1] + parent.radius > canvasHeight || parent.center[1] - parent.radius < 0) parent.center[1] = bufferCenter1;
    }

    return parent;
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

    var chanceToChange = 3;

    if (Math.floor(Math.random() * chanceToChange) === 0) {
        parent.a[0] = canvasWidth - parent.a[0];
        parent.a[1] = canvasHeight - parent.a[1];
        parent.b[0] = canvasWidth - parent.b[0];
        parent.b[1] = canvasHeight - parent.b[1];
        parent.c[0] = canvasWidth - parent.c[0];
        parent.c[1] = canvasHeight - parent.c[1];
    }

    return parent;
}

function mutate5Cir(parent) {

    var chanceToChange = 2;
    var maxChangeFactor = 1.10;
    var minChangeFactor = 0.90;

    if (Math.floor(Math.random() * chanceToChange) === 0) {

        var buffer = parent.radius;

        parent.radius = parent.radius * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (parent.center[0] + parent.radius > canvasWidth || parent.center[1] + parent.radius > canvasHeight || parent.center[0] - parent.radius < 0 || parent.center[1] - parent.radius < 0) parent.radius = buffer;
    }
    return parent;
}



