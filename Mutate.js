function mutate1(parent) {

    var offspring = parent;

    var rand = Math.floor(Math.random() * trianglesLimit);
    offspring[rand] = new Triangle();

    return offspring;
}

function mutate2(parent) {

    var offspring = parent;
    var chanceToChange = 4;
    var maxChangeFactor = 1.05;
    var minChangeFactor  = 0.95;

    for (var i = 0; i < trianglesLimit; i++) {

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            var red = offspring[i].red;
            offspring[i].red *= Math.random * (maxChangeFactor - minChangeFactor) + minChangeFactor;
            if (offspring[i].red === 0 || offspring[i].red >= 255) offspring[i].red = red;
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            var green = offspring[i].green;
            offspring[i].green *= Math.random * (maxChangeFactor - minChangeFactor) + minChangeFactor;
            if (offspring[i].green === 0 || offspring[i].green >= 255) offspring[i].green = green;
        }

        if (Math.floor(Math.random() * chanceToChange) === 0) {
            var blue = offspring[i].blue;
            offspring[i].blue *= Math.random * (maxChangeFactor - minChangeFactor) + minChangeFactor;
            if (offspring[i].blue === 0 || offspring[i].blue >= 255) offspring[i].blue = blue;
        }
    }

    return offspring;
}

function mutate3(parent) {

    var offspring = parent;

    

    return offspring;
}