/**
 * Created by demongo on 24.07.17.
 */

var triangle_limit=20;


    function Triangle() {
        this.a=[];
        this.b=[];
        this.c=[];
        this.a[0] = Math.random() * img_width;
        this.a[1]=Math.random() * img_height;
        this.b[0] = Math.random() * img_width;
        this.b[1]=Math.random() * img_height;
        this.c[0] = Math.random() * img_width;
        this.c[1]=Math.random() * img_height;

        var red=Math.floor(Math.random()*255);
        var green=Math.floor(Math.random()*255);
        var blue=Math.floor(Math.random()*255);
        this.red=red;
        this.green=green;
        this.blue=blue;
        this.color='rgb(' + red +', '+ green +', '+ blue + ')';

        this.points=0;


        this.set_abc = function(ax,ay,bx,by,cx,cy) {
            this.a[0] =ax;
            this.a[1]=ay;
            this.b[0] =bx;
            this.b[1]=by;
            this.c[0] =cx;
            this.c[1]=cy;
        }

        this.set_color= function (r,g,b) {
            this.color='rgb(' + r +', '+ g +', '+ b + ')';
        }
    }

var population=[];
for (var i=0; i<triangle_limit; i++){
    population[i]=new Triangle();
}


    var cross_over= function (parent1, parent2) {
        var offspring = new Triangle();

        offspring.set_abc(parent1.a[0],parent2.a[1],
            parent1.b[0], parent2.b[1],
            parent1.c[0], parent2.c[1]);

        offspring.set_color(parent1.red - 0.5*(parent1.red - parent2.red),
            parent1.green - 0.5*(parent1.green - parent2.green),
            parent1.blue - 0.5*(parent1.blue - parent2.blue));

        return offspring;
    };

    var mutate= function (parent) {
        var offspring= new Triangle();

        offspring.set_abc(
            parent.a[0] - 0.5*(parent.a[0] - offspring.a[0]),
            parent.a[1] - 0.5*(parent.a[1] - offspring.a[1]),
            parent.b[0] - 0.5*(parent.b[0] - offspring.b[0]),
            parent.b[1] - 0.5*(parent.b[1] - offspring.b[1]),
            parent.c[0] - 0.5*(parent.c[0] - offspring.c[0]),
            parent.c[1] - 0.5*(parent.c[1] - offspring.c[1]));

        offspring.set_color(parent.red - 0.5*(parent.red - offspring.red),
            parent.green - 0.5*(parent.green - offspring.green),
            parent.blue - 0.5*(parent.blue - offspring.blue));

        return offspring;
    };