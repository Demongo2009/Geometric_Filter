var trianglesLimit = 20;

function triangle() {

    this.a = [];
    this.b = [];
    this.c = [];

    this.a[0] = Math.random() * canvasWidth;
    this.a[1] = Math.random() * canvasHeight;
    this.b[0] = Math.random() * canvasWidth;
    this.b[1] = Math.random() * canvasHeight;
    this.c[0] = Math.random() * canvasWidth;
    this.c[1] = Math.random() * canvasHeight;

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

    this.setColor = function(r, g, b) {

        this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}


var population = new Array();
for (var i = 0; i < trianglesLimit; i++) {

    population[i] = new triangle;
}


var crossover = function(parent1, parent2) {

    var offspring = new triangle;

    offspring.setABC(parent1.a[0], parent2.a[1],
        parent1.b[0], parent2.b[1],
        parent1.c[0], parent2.c[1]);

    offspring.setColor(Math.abs(parent1.red - parent2.red),
        Math.abs(parent1.green - parent2.green),
        Math.abs(parent1.blue - parent2.blue));

    return offspirng
}

var mutate = function (parent) {

    var offspring = new triangle();

    offspring.setABC(Math.abs(parent.a[0] * Math.random() - parent.a[0] * Math.random()),
        Math.abs(parent.a[1] * Math.random() - parent.a[1] * Math.random()),
        Math.abs(parent.b[0] * Math.random() - parent.b[0] * Math.random()),
        Math.abs(parent.b[1] * Math.random() - parent.b[1] * Math.random()),
        Math.abs(parent.c[0] * Math.random() - parent.c[0] * Math.random()),
        Math.abs(parent.c[1] * Math.random() - parent.c[1] * Math.random()));

    offspring.setColor(Math.abs(parent.red - offspring.red),
        Math.abs(parent.green - offspring.green),
        Math.abs(parent.blue - offspring.blue));

    return offspring;
}





