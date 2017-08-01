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
