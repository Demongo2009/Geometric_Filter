var trianglesLimit = 3;

function triangle() {

    this.a = [];
    this.b = [];
    this.c = [];

    this.a[0] = Math.floor(Math.random() * canvasWidth);
    this.a[1] = Math.floor(Math.random() * canvasWidth);
    this.b[0] = Math.floor(Math.random() * canvasWidth);
    this.b[1] = Math.floor(Math.random() * canvasWidth);
    this.c[0] = Math.floor(Math.random() * canvasWidth);
    this.c[1] = Math.floor(Math.random() * canvasWidth);

    this.red = Math.floor(Math.random() * 256);
    this.green = Math.floor(Math.random() * 256);
    this.blue = Math.floor(Math.random() * 256);

    this.color = 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';

    this.setABC = function(ax, ay, bx, by, cx, cy) {

        this.a[0] = ax;
        this.a[1] = ay;
        this.b[0] = bx;
        this.b[1] = by;
        this.c[0] = cx;
        this.c[1] = cy;
    }

    this.setColor = function(r, g, b,) {

        this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

}


var population = new Array();
for (var i = 0; i < trianglesLimit; i++) {

    population[i] = new triangle;
    console.log(population[i]);
}


var crossover = function(parent1, parent2) {

    var offspring = new triangle;

    offspring.setABC(parent1.a[0], parent2.a[1],
        parent1.b[0], parent2.b[1],
        parent1.c[0], parent2.c[1]);

    offspring.setColor(parent1.red - 0.5*(parent1.red - parent2.red),
        parent1.green - 0.5*(parent1.green - parent2.green),
        parent1.blue - 0.5*(parent1.blue - parent2.blue));

    return offspirng
}

var mutate = function (parent) {

    var offspring = new triangle();

    offspring.setABC(
        parent.a[0] - 0.5*(parent.a[0] - offspring.a[0]),
    parent.a[0] - 0.5*(parent.a[0] - offspring.a[0]),
    parent.a[0] - 0.5*(parent.a[0] - offspring.a[0]),
    parent.a[0] - 0.5*(parent.a[0] - offspring.a[0]),
    parent.a[0] - 0.5*(parent.a[0] - offspring.a[0]),
    parent.a[0] - 0.5*(parent.a[0] - offspring.a[0]));

    offspring.setColor(parent.red - 0.5*(parent.red - offspring.red),
    parent.green - 0.5*(parent.green - offspring.green),
    parent.blue - 0.5*(parent.blue - offspring.blue));

    return offspring;
}