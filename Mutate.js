function Mutate(population) {

    var mutatedPopulation = population;
    var mutationNumber = 3;

    for (var i = 0; i < mutatedPopulation.length; i++) {

        var event = Math.floor(Math.random() * mutationNumber);

        switch (event) {

            case 0:
                mutatedPopulation[i] = mutate1(mutatedPopulation[i]);
                break;

            case 1:
                mutatedPopulation[i] = mutate2(mutatedPopulation[i]);
                break;

            case 2:
                mutatedPopulation[i] = mutate3(mutatedPopulation[i]);
                break;
        }
    }

    return mutatedPopulation;
}



function mutate1(parent) {

    var offspring = parent;

    var rand = Math.floor(Math.random() * trianglesLimit);
    offspring[rand] = new Triangle();

    return offspring;
}

function mutate2(parent) {

    var offspring = parent;
    var chanceToChange = 3;
    var maxChangeFactor = 1.05;
    var minChangeFactor  = 0.95;

    for (var i = 0; i < trianglesLimit; i++) {

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            offspring[i].red = Math.floor(offspring[i].red * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
            if (offspring[i].red >= 255) offspring[i].red = Math.floor(offspring[i].red * minChangeFactor);
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            offspring[i].green = Math.floor(offspring[i].green * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
            if (offspring[i].green >= 255) offspring[i].green = Math.floor(offspring[i].green * minChangeFactor);
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            offspring[i].blue = Math.floor(offspring[i].blue * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
            if (offspring[i].blue >= 255) offspring[i].blue = Math.floor(offspring[i].blue * minChangeFactor);
        }
    }

    return offspring;
}

function mutate3(parent) {

    var offspring = parent;
    var chanceToChange = 3;
    var maxChangeFactor = 1.05;
    var minChangeFactor = 0.95;

    for (var i = 0; i < trianglesLimit; i++) {

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            if (isNaN(offspring[i].a[0]) || isNaN(offspring[i].a[1])) debugger;
            offspring[i].a[0] = Math.floor(Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            offspring[i].a[1] = Math.floor(Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            if (isNaN(offspring[i].a[0]) || isNaN(offspring[i].a[1])) debugger;
            if (offspring[i].a[0] >= canvasWidth) offspring[i].a[0] = Math.floor(offspring[i].a[0] * minChangeFactor);
            if (offspring[i].a[1] >= canvasHeight) offspring[i].a[1] = Math.floor(offspring[i].a[1] * minChangeFactor);
            if (isNaN(offspring[i].a[0]) || isNaN(offspring[i].a[1])) debugger;
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            if (isNaN(offspring[i].b[0]) || isNaN(offspring[i].b[1])) debugger;
            offspring[i].b[0] = Math.floor(Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            offspring[i].b[1] = Math.floor(Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            if (isNaN(offspring[i].b[0]) || isNaN(offspring[i].b[1])) debugger;
            if (offspring[i].b[0] >= canvasWidth) offspring[i].b[0] = Math.floor(offspring[i].b[0] * minChangeFactor);
            if (offspring[i].b[1] >= canvasHeight) offspring[i].b[1] = Math.floor(offspring[i].b[1] * minChangeFactor);
            if (isNaN(offspring[i].b[0]) || isNaN(offspring[i].b[1])) debugger;
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            if (isNaN(offspring[i].c[0]) || isNaN(offspring[i].c[1])) debugger;
            offspring[i].c[0] = Math.floor(Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            offspring[i].c[1] = Math.floor(Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            if (isNaN(offspring[i].c[0]) || isNaN(offspring[i].c[1])) debugger;
            if (offspring[i].c[0] >= canvasWidth) offspring[i].c[0] = Math.floor(offspring[i].c[0] * minChangeFactor);
            if (offspring[i].c[1] >= canvasHeight) offspring[i].c[1] = Math.floor(offspring[i].c[1] * minChangeFactor);
            if (isNaN(offspring[i].c[0]) || isNaN(offspring[i].c[1])) debugger;
        }
    }

    return offspring;
}