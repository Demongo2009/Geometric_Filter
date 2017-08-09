function Mutate(population) {

    var mutationNumber = 6;

    for (var i = 0; i < population.length; i++) {

        var event = Math.floor(Math.random() * mutationNumber);

        switch (event) {

            case 0:
                population[i] = mutate1(population[i]);
                break;

            case 1:
                population[i] = mutate2(population[i]);
                break;

            case 2:
                population[i] = mutate3(population[i]);
                break;

            case 3:
                population[i] = mutate4(population[i]);
                break;

            case 4:
                population[i] = mutate5(population[i]);
                break;

            case 5:
                population[i] = mutate6(population[i]);
                break;
        }
    }

    return population;
}


function mutate1(parent) {

    var chanceToChange = 2;

    if (Math.floor(Math.random() * chanceToChange) === 0) {

    var rand = Math.floor(Math.random() * trianglesLimit);
    parent[rand] = new Triangle();
    }

    return parent;
}

function mutate2(parent) {

    var chanceToChange = 3;
    var maxChangeFactor = 1.10;
    var minChangeFactor  = 0.90;

    for (var i = 0; i < trianglesLimit; i++) {

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            parent[i].red = Math.floor(parent[i].red * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
            if (parent[i].red >= 255) parent[i].red = Math.floor(parent[i].red * minChangeFactor);
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            parent[i].green = Math.floor(parent[i].green * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
            if (parent[i].green >= 255) parent[i].green = Math.floor(parent[i].green * minChangeFactor);
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            parent[i].blue = Math.floor(parent[i].blue * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor));
            if (parent[i].blue >= 255) parent[i].blue = Math.floor(parent[i].blue * minChangeFactor);
        }
    }

    return parent;
}

function mutate3(parent) {

    var chanceToChange = 3;
    var maxChangeFactor = 1.10;
    var minChangeFactor = 0.90;

    for (var i = 0; i < trianglesLimit; i++) {

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            parent[i].a[0] = parent[i].a[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            parent[i].a[1] = parent[i].a[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            if (parent[i].a[0] > canvasWidth) parent[i].a[0] = canvasWidth;
            if (parent[i].a[1] > canvasHeight) parent[i].a[1] = canvasHeight;
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            parent[i].b[0] = parent[i].b[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            parent[i].b[1] = parent[i].b[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            if (parent[i].b[0] >= canvasWidth) parent[i].b[0] = canvasWidth;
            if (parent[i].b[1] >= canvasHeight) parent[i].b[1] = canvasHeight;
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            parent[i].c[0] = parent[i].c[0] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            parent[i].c[1] = parent[i].c[1] * (Math.random() * (maxChangeFactor - minChangeFactor) + minChangeFactor);
            if (parent[i].c[0] >= canvasWidth) parent[i].c[0] = canvasWidth;
            if (parent[i].c[1] >= canvasHeight) parent[i].c[1] = canvasHeight;
        }
    }

    return parent;
}


function mutate4(parent) {

    do {

        var rand1 = Math.floor(Math.random() * parent.length);
        var rand2 = Math.floor(Math.random() * parent.length);

    } while(rand1 === rand2);

    var parentTemp = parent[rand1];
    parent[rand1] = parent[rand2];
    parent[rand2] = parentTemp;

    return parent;
}

function mutate5(parent) {

    var chanceToChange = 3;

    for (var i = 0; i < trianglesLimit; i++) {

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            parent[i].a[0] = canvasWidth - parent[i].a[0];
            parent[i].a[1] = canvasHeight - parent[i].a[1];
            parent[i].b[0] = canvasWidth - parent[i].b[0];
            parent[i].b[1] = canvasHeight - parent[i].b[1];
            parent[i].c[0] = canvasWidth - parent[i].c[0];
            parent[i].c[1] = canvasHeight - parent[i].c[1];
        }
    }

    return parent;
}

function mutate6(parent) {

    var rand = Math.floor(Math.random() * trianglesLimit);

    var newParent = new Object();
    var j = 0;

    for (var i = rand; i < trianglesLimit; i++) {

        newParent[j] = parent[i].copy();
        j++
    }

    for (var i = 0; i < rand; i++) {

        newParent[j] = parent[i].copy();
        j++
    }

    return newParent;
}



