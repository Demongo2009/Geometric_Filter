function Mutate(population) {

    var mutationNumber = 5;

    for (var i = 0; i < population.length; i++) {
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
        }

        var chanceToChange = 2;
        if (Math.floor(Math.random() * chanceToChange) === 0) mutate4(population[i]);
        if (Math.floor(Math.random() * chanceToChange) === 0) mutateBg(population[i]);

    }

    return population;
}

function mutate1() {

    var mutated = new Triangle();
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

        var buffor = mutated.a[0];
        var range1 = Math.abs(mutated.a[0] - mutated.b[0]);
        var range2 = Math.abs(mutated.a[0] - mutated.c[0]);

        mutated.a[0] = mutated.a[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.a[0] > canvasWidth) mutated.a[0] = canvasWidth;

        if (range1 > Math.abs(mutated.a[0] - mutated.b[0]) || range2 > Math.abs(mutated.a[0] - mutated.c[0])) {

            mutated.a[0] = buffor;
        }

        buffor = mutated.a[1];
        range1 = Math.abs(mutated.a[1] - mutated.b[1]);
        range2 = Math.abs(mutated.a[1] - mutated.c[1]);

        mutated.a[1] = mutated.a[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.a[1] > canvasHeight) mutated.a[1] = canvasHeight;

        if (range1 > Math.abs(mutated.a[1] - mutated.b[1]) || range2 > Math.abs(mutated.a[1] - mutated.c[1])) {

            mutated.a[1] = buffor;
        }
    }

    if (chanceToChange === 1) {

        var buffor = mutated.b[0];
        var range1 = Math.abs(mutated.b[0] - mutated.a[0]);
        var range2 = Math.abs(mutated.b[0] - mutated.c[0]);

        mutated.b[0] = mutated.b[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.b[0] > canvasWidth) mutated.b[0] = canvasWidth;

        if (range1 > Math.abs(mutated.b[0] - mutated.a[0]) || range2 > Math.abs(mutated.b[0] - mutated.c[0])) {

            mutated.b[0] = buffor;
        }

        buffor = mutated.b[1];
        range1 = Math.abs(mutated.b[1] - mutated.a[1]);
        range2 = Math.abs(mutated.b[1] - mutated.c[1]);

        mutated.b[1] = mutated.b[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.b[1] > canvasHeight) mutated.b[1] = canvasHeight;

        if (range1 > Math.abs(mutated.b[1] - mutated.a[1]) || range2 > Math.abs(mutated.b[1] - mutated.c[1])) {

            mutated.b[1] = buffor;
        }
    }

    if (chanceToChange === 2) {

        var buffor = mutated.c[0];
        var range1 = Math.abs(mutated.c[0] - mutated.a[0]);
        var range2 = Math.abs(mutated.c[0] - mutated.b[0]);

        mutated.c[0] = mutated.c[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.c[0] > canvasWidth) mutated.c[0] = canvasWidth;

        if (range1 > Math.abs(mutated.c[0] - mutated.a[0]) || range2 > Math.abs(mutated.c[0] - mutated.b[0])) {

            mutated.c[0] = buffor;
        }

        buffor = mutated.c[1];
        range1 = Math.abs(mutated.c[1] - mutated.a[1]);
        range2 = Math.abs(mutated.c[1] - mutated.b[1]);

        mutated.c[1] = mutated.c[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
        if (mutated.c[1] > canvasHeight) mutated.c[1] = canvasHeight;

        if (range1 > Math.abs(mutated.c[1] - mutated.a[1]) || range2 > Math.abs(mutated.c[1] - mutated.b[1])) {

            mutated.c[1] = buffor;
        }
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

function mutate6(parent){
    var rand = Math.floor(Math.random() * figuresLimit - 1) + 1;

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
