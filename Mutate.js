function mutate(parent) {

    var offspring = new Triangle();
    //console.log(JSON.stringify(offspring.red + ' ' + offspring.green + ' ' + offspring.blue));

    offspring.a[0] = Math.floor(parent.a[0] * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.a[0] >= canvasWidth) offspring.a[0] = canvasWidth;
    offspring.a[1] = Math.floor(parent.a[1] * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.a[1] >= canvasHeight) offspring.a[1] = canvasHeight;
    offspring.b[0] = Math.floor(parent.b[0] * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.b[0] >= canvasWidth) offspring.b[0] = canvasWidth;
    offspring.b[1] = Math.floor(parent.b[1] * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.b[1] >= canvasHeight) offspring.b[1] = canvasHeight;
    offspring.c[0] = Math.floor(parent.c[0] * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.c[0] >= canvasWidth) offspring.c[0] = canvasWidth;
    offspring.c[1] = Math.floor(parent.c[1] * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.c[1] >= canvasHeight) offspring.c[1] = canvasHeight;

    offspring.red = Math.floor(parent.red * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.red > 255) offspring.red = 255;
    offspring.green = Math.floor(parent.green * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.green > 255) offspring.green = 255;
    offspring.blue = Math.floor(parent.blue * (Math.random() * (1.2 - 0.8) + 0.8));
    if (offspring.blue > 255) offspring.blue = 255;

    offspring.color = 'rgb(' + offspring.red + ', ' + offspring.green + ', ' + offspring.blue + ')';

    //console.log('\n');
    //console.log(JSON.stringify(offspring.red + ' ' + offspring.green + ' ' + offspring.blue));

    return offspring;
}


function crossover(parent1, parent2) {

    var offspring = new Triangle();

    offspring.a[0] = parent1.a[0];
    offspring.a[1] = parent2.a[1];
    offspring.b[0] = parent1.b[0];
    offspring.b[1] = parent2.b[1];
    offspring.c[0] = parent1.c[0];
    offspring.c[1] = parent2.c[1];

    offspring.red = parent1.red;
    offspring.green = parent2.green;
    offspring.blue = parent1.blue

    return offspring;
}
